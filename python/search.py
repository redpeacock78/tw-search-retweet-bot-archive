import twint
import os
from dotenv import load_dotenv
load_dotenv()

config = twint.Config()
config.Search = os.getenv('QUERY')
config.Limit = os.getenv('SEARCH_LIMIT')

twint.run.Search(config)
