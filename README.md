# HNG Internship Stage 1 Number Classification API
This is a simple Node.js application takes a number and returns interesting mathematical properties about it, along with a fun fact.

## Dependencies used
* Express
* Cors
* Express-async-errors
* Http-status-codes
* Axios


## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/katoragashua/katoragashua_hngstage_1.git

## URLS

### Homepage
https://katoragashua-hngstage-1.vercel.app/   

### API 
https://katoragashua-hngstage-1.vercel.app/api/classify-number

#### Example Response
{
  "number": 1,
  "is_prime": false,
  "is_perfect": false,
  "properties": [
    "armstrong",
    "odd"
  ],
  "digit_sum": 1,
  "fun_fact": "1 is the most common leading digit in many sets of data, a consequence of Benford's law."
}

