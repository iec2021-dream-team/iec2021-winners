## API README

### Project Setup

- API REST service uses express and the router for simplicity
- Package dependancies found in package.json (run npm init)

- A MySQL server is required on the back end, our configuration can be found under the database folder. You can configure the setup according to config.js 

- See database diagrams for more information on the schema 

#### Run Application

- API can be run by running:
node ./ to 

- This will enter index.js in the api directory 

### API Functionality: 

**notes**
- API relies on knowing the student ID for the student in question, due to time constraints we use this as the session id/key and do not authenticate beyond this point.
- The QR Code generator is currently hardcoded for amount=100 unless the client side changes this request header in the returned QR URL

- Payment API

	
	Process Transactions
	
	http://localhost:8080/payment/pay?id=100123456&amount=100
		
	
	Get balance and points 
	
	http://localhost:8080/payment/balance?id=100123456
		
	
	Spend Points 
	
	http://localhost:8080/payment/pointpay?id=100123456&amount=100
		
	
	Refill Balance 
	
	http://localhost:8080/payment/refill?id=100123456&amount=100

- QR Code API

	QR Pay with Points

	http://localhost:8080/qr/qrpoints?id=100123456
		
	QR Pay with Cash

    http://localhost:8080/qr/payqr?id=100123456


### Octa
- We rely on Octa to give us the user's student ID when they authenticate for these fields

### Purchases
- Purchases can be made by scanning the QR code, decoding the URL, and adding an amount query to the URL 
- Purchase queries actually redirect to Process Transactions 