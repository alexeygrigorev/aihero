import ingest
import search_agent 
import logs

import asyncio


def main():
    repo_owner = "DataTalksClub"
    repo_name = "faq"

    print(f"Starting AI FAQ Assistant for {repo_owner}/{repo_name}")
    print("Initializing data ingestion...")

    def filter(doc):
        return 'data-engineering' in doc['filename']

    index = ingest.index_data(repo_owner, repo_name, filter=filter)
    print("Data indexing completed successfully!")

    print("Initializing search agent...")
    agent = search_agent.init_agent(index, repo_owner, repo_name)
    print("Agent initialized successfully!")
    
    print("\nReady to answer your questions!")
    print("Type 'stop' to exit the program.\n")

    while True:
        question = input("Your question: ")
        if question.strip().lower() == 'stop':
            print("Goodbye!")
            break

        print("Processing your question...")
        response = asyncio.run(agent.run(user_prompt=question))
        logs.log_interaction_to_file(agent, response.new_messages())

        print("\nResponse:\n", response.output)
        print("\n" + "="*50 + "\n")


if __name__ == "__main__":
    main()
