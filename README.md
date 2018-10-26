This will deploy an apollo engine and a graphql spring boot server in the kubernetes cluster.
after the deployment you will get an IP address for the apollo engine load balncer service from the kubernetes.

you can check the functionalities using POSTMAN.

give the following URL as POST request http://APOLLO-ENGINE-IP:5000/Ref/graphql
 with the following query
 
 {
	"query":"{findAllBooks { id title } }"
}

specify the body type as raw JSON format in POSTMAN