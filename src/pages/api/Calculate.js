export default function handler(req, res) {
    if (req.method === 'POST') {
      const { amount, tenure, rate } = req.body;
  
      // Validate the payload
      if (!amount || !tenure || !rate) {
        return res.status(400).json({ st: 'error', message: 'Missing required fields' });
      }
  
      // Calculate EMI, interest, and total amount
      const principal = parseFloat(amount);
      const interestRate = parseFloat(rate) / 12 / 100;
      const numberOfPayments = parseFloat(tenure) * 12;
      const emi = (principal * interestRate * Math.pow(1 + interestRate, numberOfPayments)) / (Math.pow(1 + interestRate, numberOfPayments) - 1);
      const interest = emi * numberOfPayments - principal;
      const totalAmt = principal + interest;
  
      // Prepare the response
      const response = {
        st: 'success',
        emi: emi.toFixed(2),
        interest: interest.toFixed(2),
        totalamt: totalAmt.toFixed(2)
      };
  
      // Send the response
      return res.status(200).json(response);
    } else {
      return res.status(405).json({ st: 'error', message: 'Method Not Allowed' });
    }
  }
  