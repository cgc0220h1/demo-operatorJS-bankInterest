function fValue() {
    let pValue = document.getElementById('pValue-input').value;
    let interest = document.getElementById('interest-input').value;
    let month = document.getElementById('month-input').value;
    let fValue = pValue * (1 + interest / 100)**month;
    document.getElementById('fValue').innerHTML = "<b>Số tiền cả gốc lẫn lãi là : " + fValue + "</b>"
}