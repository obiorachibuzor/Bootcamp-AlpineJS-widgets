function yearsAgo(newDate) {
    const today = new Date();
    
    return new Date().getFullYear() - newDate;
  }
