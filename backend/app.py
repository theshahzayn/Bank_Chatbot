from flask import Flask, request, jsonify
from transformers import T5Tokenizer, T5ForConditionalGeneration

from flask_cors import CORS
app = Flask(__name__)
CORS(app)

# Load model and tokenizer
try:
    tokenizer = T5Tokenizer.from_pretrained("fine_tuned_T5_small")
    model = T5ForConditionalGeneration.from_pretrained("fine_tuned_T5_small")
except Exception as e:
    raise RuntimeError("Error loading the model or tokenizer: " + str(e))

@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.json
        if not data or "input_text" not in data:
            return jsonify({"error": "Missing input_text parameter"}), 400
        
        input_text = data["input_text"]

        # Generate response
        input_ids = tokenizer(input_text, return_tensors="pt").input_ids
        
        output_ids = model.generate(
            input_ids,
            max_length=256,
            num_beams=3,
            no_repeat_ngram_size=2,
            temperature=0.7,
            top_k=50,
            top_p=0.95
        )

        response = tokenizer.decode(output_ids[0], skip_special_tokens=True)
        
        return jsonify({"response": response})

    except Exception as e:
        return jsonify({"error": "An error occurred while processing the request", "details": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
