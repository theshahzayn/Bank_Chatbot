# Dolatbot: A Banking Chatbot

Dolatbot is an intelligent banking chatbot designed to provide seamless customer support using advanced Natural Language Processing (NLP) techniques. Built with a React-based frontend and Flask backend, Dolatbot integrates machine learning and deep learning models to deliver a highly accurate and conversational experience.

---

## Features

- **Text-to-Text Response Generation**: Provides contextual and dynamic responses to user queries.
- **Seamless Frontend-Backend Integration**: Built with React for a responsive user interface and Flask for scalable backend services.
- **Fine-tuned AI Model**: Utilizes a fine-tuned `google_flan_T5_small` model for generating intelligent responses.
- **Custom Training Pipeline**: Developed using custom datasets with intent-based classification and text generation.

---

## Development Journey

1. **Understanding NLP with Random Forest Classifier**:
   - We started with a dataset that included an `intent` column to classify user queries.
   - Used a `RandomForestClassifier` to understand basic NLP tasks and classify intents.

2. **Exploring Transformers with GPT-2**:
   - Attempted to train the powerful `GPT-2` transformer.
   - Faced challenges related to weight and bias errors during the training process due to its complexity.

3. **Fine-Tuning BERT**:
   - Trained the `bert-base-uncased` model on our dataset.
   - Achieved excellent text classification results.
   - However, BERT was primarily a classification model, and we needed a text-to-text generation model for our chatbot.

4. **Adopting Google-T5**:
   - Discovered the `google-T5` model on Hugging Face, specifically designed for text-to-text tasks.
   - Fine-tuned the `google_flan_T5_small` model on our dataset.
   - Successfully created a fine-tuned text-to-text generation model, which became the foundation of Dolatbot.

---

## Technical Stack

### Frontend
- **React**: For building a dynamic, user-friendly interface.

### Backend
- **Flask**: Lightweight backend framework for handling API requests and integrating the chatbot model.

### Machine Learning
- **Hugging Face Transformers**:
  - `google_flan_T5_small`: Fine-tuned model for text-to-text response generation.
  - `bert-base-uncased`: Used for initial text classification tasks.
- **Scikit-learn**:
  - `RandomForestClassifier`: Used for basic NLP and intent classification.

---

## Installation

### Prerequisites
- Python 3.8+
- Node.js 16+
- pip (Python package manager)

### Clone the Repository
```bash
$ git clone https://github.com/your-repo/dolatbot.git
$ cd dolatbot
```

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   $ cd backend
   ```

2. Install Python dependencies:
   ```bash
   $ pip install -r requirements.txt
   ```

3. Run the Flask server:
   ```bash
   $ python app.py
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   $ cd ../frontend
   ```

2. Install Node.js dependencies:
   ```bash
   $ npm install
   ```

3. Start the React development server:
   ```bash
   $ npm start
   ```

---

## Usage
1. Start both the backend (Flask) and frontend (React) servers.
2. Open your browser and navigate to `http://localhost:3000`.
3. Interact with Dolatbot by typing your queries in the chatbot interface.

---

## Dataset
We trained Dolatbot on a custom dataset containing user queries and their corresponding intents. The dataset was specifically tailored to banking-related queries to ensure domain-specific accuracy.

---

## Model Training
To train the `google_flan_T5_small` model:
1. Prepare your dataset in the required format.
2. Fine-tune the model using Hugging Face's Transformers library.
3. Save the trained model:
   ```python
   from transformers import T5Tokenizer, T5ForConditionalGeneration

   # Load and fine-tune the model
   model = T5ForConditionalGeneration.from_pretrained("google/flan-t5-small")
   tokenizer = T5Tokenizer.from_pretrained("google/flan-t5-small")

   # Save the model
   model.save_pretrained("./fine_tuned_T5_small")
   tokenizer.save_pretrained("./fine_tuned_T5_small")
   ```
4. Use the saved model in the backend.

---

## Challenges
- **Training GPT-2**: Encountered weight and bias errors due to resource constraints and complexity.
- **Selecting the Right Model**: Transitioning from intent classification to text-to-text generation involved multiple iterations and model experiments.

---

## Future Work
- Expand Dolatbot's capabilities to handle multi-turn conversations.
- Integrate advanced LLMs such as GPT-4 for even better response quality.
- Enhance the dataset for broader domain coverage.

---

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contributors
- **[Shahzain Zaidi](https://www.linkedin.com/in/shahzain-zaidi/)**

Feel free to contribute by submitting issues or pull requests!

