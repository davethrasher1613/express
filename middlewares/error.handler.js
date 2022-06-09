function logErrors (err, req, res, next) {
  console.error('logErrors');
  console.error(err);
  next(err)
}

function errorHandler (err, req, res, next) {
    console.error('errorHandler');
    res.status(500).json({
        message: err.message,
        stack: err.stack
    });
}

function boomerrorHandler (err, req, res, next) {
    if (err.isBoom) {
        const { output} = err;
        res.status(output.statusCode).json({
            message: output.payload.message,
            stack: output.payload.stack
        });
    } 
    else {
        next(err);
    }
}

module.exports = { logErrors, errorHandler, boomerrorHandler }