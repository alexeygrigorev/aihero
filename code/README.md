# 🤖 AI FAQ Assistant for DataTalksClub

An AI-powered assistant that helps students quickly find answers to FAQ questions from **[DataTalksClub](https://github.com/DataTalksClub/faq)** courses.  
Built as a project for the [AI Agents Crash Course](https://alexeygrigorev.com/aihero/).  

---

## 1. Overview

Students often struggle to navigate large FAQ documents. This project solves that problem by providing a conversational assistant that:  
- Searches the **DataTalksClub/faq** repository.  
- Retrieves the most relevant content.  
- Generates helpful answers with references to the original materials.  

Why it’s useful:  
- No more endless scrolling through Markdown docs.  
- Direct links to the source in the GitHub repo.  
- Interactive chat interface (via Streamlit) and CLI mode.  

---

## 2. Installation

### Requirements  
- Python 3.9+  
- [uv](https://github.com/astral-sh/uv) (fast Python package/dependency manager)  

### Setup  
```bash
# Clone this repo
git clone https://github.com/yourusername/faq-assistant.git
cd faq-assistant

# Install dependencies with uv
uv sync
```

---

## 3. Usage

### CLI mode  
```bash
uv run main.py
```
You’ll get a prompt:  
```
Your question: How do I set up the data engineering course?
```

Type `stop` to exit.  

### Web UI mode  
```bash
uv run streamlit run app.py
```
This launches a **Streamlit app** where you can chat with the assistant in a browser.  

---

## 4. Features

- 🔎 **Semantic search** over FAQ Markdown files.  
- 🤖 **AI-generated answers** powered by `pydantic-ai` + OpenAI (`gpt-4o-mini`).  
- 📂 **Direct GitHub references** in answers.  
- 🖥️ **Two interfaces**: CLI (`main.py`) and Streamlit (`app.py`).  
- 📝 **Automatic logging** of conversations into JSON files (`logs/`).  

### Roadmap  
- [ ] Support multiple DataTalksClub courses beyond data-engineering.  
- [ ] Add vector embeddings for improved retrieval.  
- [ ] Dockerize for easy deployment.  

---

## 5. Contributing

Contributions are welcome!  

- Fork the repo & open a PR.  
- Follow PEP8 style guidelines.  
- Add tests where relevant.  

(See `CONTRIBUTING.md` if available.)  

---

## 6. Tests

```bash
uv run pytest
```

(Currently minimal test coverage; contributions welcome.)  

---

## 7. Deployment

- Streamlit app can be deployed to [Streamlit Cloud](https://streamlit.io/cloud) or any PaaS (Heroku, Fly.io, etc.).  
- Logs are stored locally (`logs/`) but can be configured via `LOGS_DIRECTORY`.  
- For production, consider adding CI/CD workflows (GitHub Actions).  

---

## 8. FAQ / Troubleshooting

**Q: Why am I not seeing results for some queries?**  
A: By default, only files containing `"data-engineering"` in their name are indexed. Adjust the filter in `main.py` and `app.py` to include other courses.  

**Q: I get an error about missing dependencies.**  
A: Make sure you’ve installed everything with `uv sync`.  

---

## 9. Credits / Acknowledgments

- [DataTalksClub](https://github.com/DataTalksClub) for open-source course materials.  
- [Alexey Grigorev](https://alexeygrigorev.com/) for the AI Agents Crash Course.  
- Libraries: `pydantic-ai`, `minsearch`, `streamlit`, `python-frontmatter`.  

---

## 10. License

MIT License.  
See [LICENSE](./LICENSE) for details.  
