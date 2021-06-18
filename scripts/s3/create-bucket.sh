#pega pelo terminal o nome do bucket
BUCKET_NAME=$1
# cria o bucket
aws --endpoint-url=http://localhost:4566 s3 mb s3://$BUCKET_NAME
# lista o bucket
aws --endpoint-url=http://localhost:4566 s3 ls
# exemplo do uso 'bash scripts/s3/create-bucket.sh meu-bucket'

