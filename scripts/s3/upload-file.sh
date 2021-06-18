#pega pelo terminal o nome do bucket
BUCKET_NAME=$1
#pega o caminho do arquivo
FILE_PATH=$2

#faz upload do arquivo
aws --endpoint-url=http://localhost:4566 s3 cp $FILE_PATH s3://$BUCKET_NAME
# lista o bucket
aws --endpoint-url=http://localhost:4566 s3 ls
# exemplo do uso 'scripts/s3/upload-file.sh meu-bucket test.txt'
