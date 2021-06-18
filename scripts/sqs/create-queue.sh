#pega pelo terminal o nome do bucket
QUEUE_NAME=$1
# criando queue
aws --endpoint-url=http://localhost:4566 sqs create-queue --queue-name $QUEUE_NAME
# listando queue
aws --endpoint-url=http://localhost:4566 sqs list-queues
# exemplos 'bash scripts/sqs/create-queue.sh amauri'
