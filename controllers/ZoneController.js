var Zone = require('../models/Zone');

module.exports  = {
  find: function(params, callback){
    // use find self callback function structure
    Zone.find(params, function(err, zones){
      if(err){
        // error is always first, payload is second
        callback(err,null)
        // call our callback function
        return
      }
      callback(null, zones)
    })
  },
  findById: function(id, callback){
    Zone.findById(id, function(err,zone){
      if(err){
        callback(err,null)
        return
      }
      callback(null, zone)
    })
  },
  create: function(params, callback){
    // make zips string to
    var zips = params['zipCodes'];
    var zip = zips.split(',');
    var newZips = [];
    zip.forEach(function(zipCode){
      newZips.push(zipCode.trim());
    });
    // 拿出来后记得要放回去，毕竟这里是当做一个整体处理
    params['zipCodes'] = newZips;

    Zone.create(params, function(err, zone){
      if(err){
        callback(err, null)
        return
      }
      callback(null, zone)
    })
  },
  update: function(id, params, callback){
    Zone.findByIdAndUpdate(id, params, {new: true}, function(err, zone){
      if(err){
        callback(err, null);
        return;
      }
      callback(null,zone);
    });
  },
  destroy: function(id, callback){
    Zone.findByIdAndRemove(id, function(err){
      if(err){
        callback(err,null);
        return;
      }
      callback(null, null);
    })
  }
}
