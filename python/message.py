class Message:

    # attribute
    '''
    author
    date
    reaction
    timestamp
    '''

    def __init__(self, author, body, timestamp, reactions, attachments):
        self.author = author
        self.body = body
        self.timestamp = timestamp
        self.reactions = reactions
        self.attachments = attachments


