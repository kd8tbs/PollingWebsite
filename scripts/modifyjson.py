# simple script to modify json file with random weights
import json
import random

def modify_json(path):
    with open(path, 'r') as file:
        data = json.load(file)

    # Loop through each poll
    for poll in data['polls']:
        poll_count = 0
        # Loop through each answer in the poll
        for answer in poll['answers']:
            # Set answerWeight to a random number between 1 and 100
            answer['answerWeight'] = random.randint(1, 100)
            # Add answerWeight to poll_count
            poll_count += answer['answerWeight']
        # Set pollCount to the sum of all answerWeight tags in the poll
        poll['pollCount'] = poll_count

    # Write the modified data back to the JSON file
    with open(path, 'w') as file:
            json.dump(data, file)

# usage
modify_json('/home/kd8tbs/git/PollingWebsite/frontend/src/records.json')
