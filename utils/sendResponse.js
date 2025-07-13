function sendResponse(res, status = 200, data = {}, message = 'Success') { 
  return res.status(status).json({
    success: true,
    message,
    data 
  });
};

module.exports = sendResponse;