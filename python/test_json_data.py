from json_parser import parse_conversation_from_file
from metrics import *

message_list = parse_conversation_from_file('data.json')
#print("user leaderboard by received reactions", user_leaderboard(message_list))
#print("message_leaderboard", message_leaderboard(message_list))
#print("user leaderboard by given reactions", user_leaderboard(message_list, 'given reactions'))
#print("user leaderboard by sent messages", user_leaderboard(message_list, 'sent messages'))
#print(filter_sym_dict(sym_adjacency_dict(message_list)))
print(get_words_for_cloud(message_list))