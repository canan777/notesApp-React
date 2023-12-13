const useCreateDate = () => {
    const dateObj = new Date();
    console.log(dateObj);
    const month = dateObj.getMonth();
    console.log(month);
    let montName;
    switch (month) {
      case 0:
        montName = "Ocak";
        break;
      case 1:
        montName = "Şubat";
        break;
      case 2:
        montName = "Mart";
        break;
      case 3:
        montName = "Nisan";
        break;
      case 4:
        montName = "Mayıs";
        break;
      case 5:
        montName = "Haziran";
        break;
      case 6:
        montName = "Temmuz";
        break;
      case 7:
        montName = "Ağustos";
        break;
      case 8:
        montName = "Eylül";
        break;
      case 9:
        montName = "Ekim";
        break;
      case 10:
        montName = "Kasım";
        break;
      case 11:
        montName = "Aralık";
        break;
    }
    const date = `${montName} ${dateObj.getDate()}, ${dateObj.getFullYear()} [${dateObj.getHours()}:${dateObj.getMinutes()} ]`;
    return date;
  };
  export default useCreateDate;