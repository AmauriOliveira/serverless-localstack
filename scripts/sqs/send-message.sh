#pegando a url
QUEUE_URL=$1
MESSAGE=$2
# Send msg to SQS
  aws --endpoint-url=http://localhost:4566 sqs send-message --queue-url $QUEUE_URL --message-body "$MESSAGE"
# Receive msg from SQS
  aws --endpoint-url=http://localhost:4566 sqs receive-message --queue-url $QUEUE_URL
# Exemplo 'bash scripts/sqs/send-message.sh http://localhost:4566/000000000000/amauri TokenLab'