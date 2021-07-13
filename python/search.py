import os
import twint
from dotenv import load_dotenv
load_dotenv()

config = twint.Config()
config.Search = os.getenv('SEARCH_QUERY')
config.Limit = os.getenv('SEARCH_LIMIT')

twint.run.Search(config)
