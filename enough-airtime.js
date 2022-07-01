function enoughAirtime(airtimeUsage, availableAmount) {
    var call = 1.88;
    var data = 12;
    var sms = 0.75;
    let airtimeUsed = 0;
    var airtimeMessage = airtimeUsage.split(',');
    
    for (var i=0; i < airtimeMessage.length; i++) {
      if (airtimeMessage[i].startsWith('call')) {
        airtimeUsed += call;
      } else if (airtimeMessage[i].startsWith('sms')) {
        airtimeUsed += sms;
      } else if (airtimeMessage[i].startsWith('data')) {
        airtimeUsed += data;
      }
    }
    
    const sum = (airtimeUsed > availableAmount) ? 0 : availableAmount - airtimeUsed;
    return 'R' + sum.toFixed(2);
  }
