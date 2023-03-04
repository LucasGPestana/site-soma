function isANumber(num, num2) {
  if (num >= 1 && num <= 100 && num2 >= 1 && num2 <= 100) {
    return true
  } else {
    return false
  }
}

function somar() {
  let txtNum = window.document.getElementById('txtNum')
  let txtNum2 = window.document.getElementById('txtNum2')
  let res = window.document.getElementById('res')
  let text = ''

  num = Number(txtNum.value)
  num2 = Number(txtNum2.value)

  if (isANumber(num, num2)) {
    let soma = num + num2
    res.innerHTML = `A soma entre <strong>${num}</strong> e <strong>${num2}</strong> é <strong>${soma}</strong>`
    res.style.width = '165px'
  } else {
    res.innerHTML = `Impossível realizar a conta! Por favor, digite um valor <strong>válido</strong>!`
    res.style.width = '440px'
  }

  res.style.paddingTop = '15px'
  res.style.margin = 'auto'
}
