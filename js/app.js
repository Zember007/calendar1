//Измерение ширины экрана
const viewport_width = document.documentElement.clientWidth;
//При изменении ширины обновлять экран
addEventListener("resize", (event) => {location.href = location.href});
let mobile_year = 0
let mobile_month = 0
let array_checket_list = []
var from_checked_old;
var before_checked_old;
var from_checked_old_del;
var before_checked_old_del;
flag_list = 0;
function date_checked_list(m_f, y_f, m_b, y_b) {
  var id_list = '';
  for (let year = date_checked_from_array[2]; year <= date_checked_before_array[2]; year++) {
    for (let month = 1; month <= 12; month++) {
      for (let day = 1; day <= 31; day++) {
        if (new Date(date_checked_from_array[2], date_checked_from_array[1], date_checked_from_array[0]) < new Date(year, month, day) && new Date(year, month, day) < new Date(date_checked_before_array[2], date_checked_before_array[1], date_checked_before_array[0])) {
          array_checket_list.push([day, month, year]);
        }
      }
    }
  }
  for (let i = 0; i < array_checket_list.length; i++) {
    if (m_f == array_checket_list[i][1] && y_f == array_checket_list[i][2]) {
      var id = `${array_checket_list[i][0]}.${array_checket_list[i][1]}.${array_checket_list[i][2]}`;
      if (document.getElementById(id + '_from') != null) {
        document.getElementById(id + '_from').classList.add('date_checked-list')
      }
    }
    if (m_b == array_checket_list[i][1] && y_b == array_checket_list[i][2]) {
      var id = `${array_checket_list[i][0]}.${array_checket_list[i][1]}.${array_checket_list[i][2]}`;
      if (document.getElementById(id + '_before') != null) {
        document.getElementById(id + '_before').classList.add('date_checked-list')
      }
    }
  }
  if (date_checked_from_array[1] == date_checked_before_array[1] && date_checked_from_array[2] == date_checked_before_array[2]) {
    if (date_checked_from_array[0] < date_checked_before_array[0]) {
      from_checked_old = `${date_checked_before_array[0]}.${date_checked_before_array[1]}.${date_checked_before_array[2]}_from`
      before_checked_old = `${date_checked_from_array[0]}.${date_checked_from_array[1]}.${date_checked_from_array[2]}_before`
      document.getElementById(from_checked_old).classList.add('date_checked')
      document.getElementById(before_checked_old).classList.add('date_checked')
    }
  }
}

function date_checked_list_clear(m_f, y_f, m_b, y_b) {
  for (let i = 0; i < array_checket_list.length; i++) {
    if (m_f == array_checket_list[i][1] && y_f == array_checket_list[i][2]) {
      var id = `${array_checket_list[i][0]}.${array_checket_list[i][1]}.${array_checket_list[i][2]}`;
      if (document.getElementById(id + '_from') != null) {
        document.getElementById(id + '_from').classList.remove('date_checked-list')
      }
    }
    if (m_b == array_checket_list[i][1] && y_b == array_checket_list[i][2]) {
      var id = `${array_checket_list[i][0]}.${array_checket_list[i][1]}.${array_checket_list[i][2]}`;
      if (document.getElementById(id + '_before') != null) {
        document.getElementById(id + '_before').classList.remove('date_checked-list')
      }
    }
  }
  if (m_f == m_b && y_f == y_b) {
    if (flag_list == 1) {
      document.getElementById(from_checked_old).classList.remove('date_checked')
      document.getElementById(before_checked_old).classList.remove('date_checked')
    }
    flag_list = 1
  }
  array_checket_list = []
}

// Создаём переменные с активными датами
var date_checked_before = '';
var date_checked_before_array = [];
var date_checked_from = '';
var date_checked_from_array = [];
function date_before(i, m, y) {
  var id = `${i}.${m}.${y}`;
  if (date_checked_before.length > 0 && date_checked_before_array[1] == m && date_checked_before_array[2] == y) {
    document.getElementById(date_checked_before + '_before').classList.remove('date_checked')
  }
  document.getElementById(id + '_before').classList.add('date_checked')

  date_checked_before = id;
  date_checked_before_array = [i, m, y];
  if (i <= 9 && m <= 9) {
    document.getElementById('input_before').value = `0${i}.0${m}.${y}`
  }
  else if (i <= 9) {
    document.getElementById('input_before').value = `0${i}.${m}.${y}`
  }
  else if (m <= 9) {
    document.getElementById('input_before').value = `${i}.0${m}.${y}`
  }
  else {
    document.getElementById('input_before').value = `${i}.${m}.${y}`
  }
  date_checked_list_clear(m_from, y_from, m, y)
  date_checked_list(m_from, y_from, m, y)
  document.getElementById('rest_apply').classList.add('rest_apply_active')
  document.getElementById('btn_apply').classList.add('btn_apply_active')
  document.getElementById('calendar_before').classList.remove('calendar_active');
  document.getElementById('calendar-inf_before').classList.remove('calendar-inf_active');
  document.getElementById('calen_clear_before').style.display = "";
  names_flag_before = 0
  if (viewport_width <= 820) {
    document.getElementById('btn_apply-mobile').classList.add('btn_apply_active')
    document.getElementById('calen_open-before').style.display = 'block'
    document.getElementById('cal-inf-text_before').innerHTML = 'ДАТА ДО'
  }
}

function date_from(i, m, y) {
  var id = `${i}.${m}.${y}`;
  if (date_checked_from.length > 0 && date_checked_from_array[1] == m && date_checked_from_array[2] == y) {
    document.getElementById(date_checked_from + '_from').classList.remove('date_checked')
  }
  document.getElementById(id + '_from').classList.add('date_checked')

  date_checked_from = id;
  date_checked_from_array = [i, m, y];
  if (i <= 9 && m <= 9) {
    document.getElementById('input_from').value = `0${i}.0${m}.${y}`
  }
  else if (i <= 9) {
    document.getElementById('input_from').value = `0${i}.${m}.${y}`
  }
  else if (m <= 9) {
    document.getElementById('input_from').value = `${i}.0${m}.${y}`
  }
  else {
    document.getElementById('input_from').value = `${i}.${m}.${y}`
  }
  date_checked_list_clear(m, y, m_before, y_before)
  date_checked_list(m, y, m_before, y_before)
  document.getElementById('rest_apply').classList.add('rest_apply_active')
  document.getElementById('btn_apply').classList.add('btn_apply_active')
  document.getElementById('calendar_from').classList.remove('calendar_active');
  document.getElementById('calendar-inf_from').classList.remove('calendar-inf_active');
  document.getElementById('calen_clear_from').style.display = "";
  names_flag_from = 0
  if (viewport_width <= 820) {
    document.getElementById('btn_apply-mobile').classList.add('btn_apply_active')
    document.getElementById('calen_open-from').style.display = 'block'
    document.getElementById('cal-inf-text_from').innerHTML = 'ДАТА ОТ'
  }
}

let m_from, y_from;

var Cal_from = function (divId) {
  //Сохраняем идентификатор div
  this.divId = divId;
  // Дни недели с понедельника
  this.DaysOfWeek = [
    'Пн',
    'Вт',
    'Ср',
    'Чт',
    'Пт',
    'Сб',
    'Вс'
  ];
  // Месяцы начиная с января
  this.Months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
  //Устанавливаем текущий месяц, год
  var d = new Date()
  /* this.currMonth
  this.currYear
  this.currDay */
  this.currMonth = d.getMonth();
  this.currYear = d.getFullYear();
  this.currDay = d.getDate();
};
// Переход к следующему месяцу
Cal_from.prototype.nextMonth = function () {
  if (this.currMonth == 11) {
    this.currMonth = 0;
    this.currYear = this.currYear + 1;
  }
  else {
    this.currMonth = this.currMonth + 1;
  }
  this.showcurr();
};
// Переход к предыдущему месяцу
Cal_from.prototype.previousMonth = function () {
  if (this.currMonth == 0) {
    this.currMonth = 11;
    this.currYear = this.currYear - 1;
  }
  else {
    this.currMonth = this.currMonth - 1;
  }
  this.showcurr();
};

// Переход к следующему году
Cal_from.prototype.nextYear = function () {
  this.currYear = this.currYear + 1;
  this.showcurr();
};

// Переход к предыдущему году
Cal_from.prototype.previousYear = function () {
  this.currYear = this.currYear - 1;
  this.showcurr();
};

Cal_from.prototype.listYear = function (num) {
  this.currYear = num;
  this.showcurr();
};

Cal_from.prototype.listMonth = function (num) {
  this.currMonth = num;
  this.showcurr();
};

// Показать текущий месяц
var month_from = 0
var year_from = 0
Cal_from.prototype.showcurr = function () {
  if (month_from != 0 && year_from != 0) {
    this.showMonth(this.currYear, this.currMonth);
  }
};
let numb_stroke;
// Показать месяц (год, месяц)
Cal_from.prototype.showMonth = function (y, m) {
  var d = new Date()
    // Первый день недели в выбранном месяце 
    , firstDayOfMonth = new Date(y, m, 7).getDay()
    // Последний день выбранного месяца
    , lastDateOfMonth = new Date(y, m + 1, 0).getDate()

  // Запись выбранного месяца и года
  document.getElementById('year_cal-from').innerHTML = y;
  document.getElementById('month_cal-from').innerHTML = this.Months[m];
  m_from = m + 1
  y_from = y
  var html = '<table>';
  // заголовок дней недели
  html += '<tr class="days">';
  for (var i = 0; i < this.DaysOfWeek.length; i++) {
    html += '<td>' + this.DaysOfWeek[i] + '</td>';
  }
  html += '</tr>';
  // Записываем дни
  var i = 1;
  numb_stroke = 0
  do {
    var dow = new Date(y, m, i).getDay();
    // Начать новую строку в понедельник
    if (dow == 1) {
      html += '<tr class="block_cl_from">';
      numb_stroke++
    }
    // Если первый день недели не понедельник заполнить пустоту
    else if (i == 1) {
      numb_stroke++
      html += '<tr class="block_cl_from">';
      html += `<td colspan = "${firstDayOfMonth}"></td>`;
    }
    // Записываем текущий день в цикл
    var chk = new Date();
    var chkY = chk.getFullYear();
    var chkM = chk.getMonth();
    html += `<td class="calc_color-theme"><button type="button" onclick="date_from(${i},${m + 1},${y})" id="${i}.${m + 1}.${y}_from">` + i + '</button></td>';
    // закрыть строку
    if (dow == 0) {
      html += '</tr>';
    }
    i++;
  } while (i <= lastDateOfMonth);

  if (numb_stroke == 4) {
    html += '<tr><td colspan = "7"></td></tr><tr><td colspan = "7"></td></tr>'
  } else if (numb_stroke == 5) {
    html += '<tr><td colspan = "7"></td></tr>'
  }
  // Конец таблицы
  html += '</table>';
  // Записываем HTML в div
  document.getElementById(this.divId).innerHTML = html;

  if (date_checked_from_array[2] == y && date_checked_from_array[1] == (m + 1)) {
    date_checked_from = `${date_checked_from_array[0]}.${date_checked_from_array[1]}.${date_checked_from_array[2]}_from`
    document.getElementById(date_checked_from).classList.add('date_checked')
  }
  date_checked_list(m + 1, y, date_checked_before_array[1], date_checked_before_array[2])
};

var m_before, y_before

var Cal_before = function (divId) {
  //Сохраняем идентификатор div
  this.divId = divId;
  // Дни недели с понедельника
  this.DaysOfWeek = [
    'Пн',
    'Вт',
    'Ср',
    'Чт',
    'Пт',
    'Сб',
    'Вс'
  ];
  // Месяцы начиная с января
  this.Months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
  //Устанавливаем текущий месяц, год
  var d = new Date();
  this.currMonth = d.getMonth();
  this.currYear = d.getFullYear();
  this.currDay = d.getDate();
  apply()
};
// Переход к следующему месяцу
Cal_before.prototype.nextMonth = function () {
  if (this.currMonth == 11) {
    this.currMonth = 0;
    this.currYear = this.currYear + 1;
  }
  else {
    this.currMonth = this.currMonth + 1;
  }
  this.showcurr();
};
// Переход к предыдущему месяцу
Cal_before.prototype.previousMonth = function () {
  if (this.currMonth == 0) {
    this.currMonth = 11;
    this.currYear = this.currYear - 1;
  }
  else {
    this.currMonth = this.currMonth - 1;
  }
  this.showcurr();
};

// Переход к следующему году
Cal_before.prototype.nextYear = function () {
  this.currYear = this.currYear + 1;
  this.showcurr();
};

// Переход к предыдущему году
Cal_before.prototype.previousYear = function () {
  this.currYear = this.currYear - 1;
  this.showcurr();
};

Cal_before.prototype.listYear = function (num) {
  this.currYear = num;
  this.showcurr();
};

Cal_before.prototype.listMonth = function (num) {
  this.currMonth = num;
  this.showcurr();
};

// Показать текущий месяц

var month_before = 0
var year_before = 0

Cal_before.prototype.showcurr = function () {
  this.showMonth(this.currYear, this.currMonth);
};
// Показать месяц (год, месяц)
let flag = 0;
Cal_before.prototype.showMonth = function (y, m) {
  var d = new Date()
    // Первый день недели в выбранном месяце 
    , firstDayOfMonth = new Date(y, m, 7).getDay()
    // Последний день выбранного месяца
    , lastDateOfMonth = new Date(y, m + 1, 0).getDate();
  // Запись выбранного месяца и года
  document.getElementById('year_cal-before').innerHTML = y;
  document.getElementById('month_cal-before').innerHTML = this.Months[m];
  var html = '<table class="table_before">';
  // заголовок дней недели
  html += '<tr class="days">';
  for (var i = 0; i < this.DaysOfWeek.length; i++) {
    html += '<td>' + this.DaysOfWeek[i] + '</td>';
  }
  html += '</tr>';
  m_before = m + 1;
  y_before = y
  // Записываем дни
  var i = 1;
  numb_stroke = 0;
  do {
    var dow = new Date(y, m, i).getDay();
    // Начать новую строку в понедельник
    if (dow == 1) {
      html += '<tr class="block_cl_before">';
      numb_stroke++
    }
    // Если первый день недели не понедельник заполнить пустоту
    else if (i == 1) {
      numb_stroke++
      html += '<tr class="block_cl_before">';
      html += `<td colspan = "${firstDayOfMonth}"></td>`;
    }
    // Записываем текущий день в цикл
    var chk = new Date();
    var chkY = chk.getFullYear();
    var chkM = chk.getMonth();
    var chkD = chk.getDate();
    html += `<td class="calc_color-theme block-before"><button type="button" onclick="date_before(${i},${m + 1},${y})" id="${i}.${m + 1}.${y}_before">` + i + '</button></td>';
    // закрыть строку
    if (dow == 0) {
      html += '</tr>';
    }
    i++;
  } while (i <= lastDateOfMonth);
  if (numb_stroke == 4) {
    html += '<tr><td colspan = "7"></td></tr><tr><td colspan = "7"></td></tr>'
  } else if (numb_stroke == 5) {
    html += '<tr><td colspan = "7"></td></tr>'
  }
  // Конец таблицы
  html += '</table>';
  // Записываем HTML в div
  document.getElementById(this.divId).innerHTML = html;

  if (date_checked_before_array[2] == y && date_checked_before_array[1] == (m + 1)) {
    date_checked_before = `${date_checked_before_array[0]}.${date_checked_before_array[1]}.${date_checked_before_array[2]}_before`;
    document.getElementById(date_checked_before).classList.add('date_checked');
  }

  //Если первая загрузка календаря, то отметить дату 
  if (flag == 0) {
    flag = 1;
    date_before(chkD, chkM + 1, chkY)
    apply()
  }
  date_checked_list(date_checked_from_array[1], date_checked_from_array[2], m + 1, y)
};
// При загрузке окна
var Calc_f = new Cal_from("Calc-from");
var Calc_b = new Cal_before("Calc-before");
window.onload = function () {
  // Начать календарь
  Calc_f.showcurr();

  getId('btnNext-month-from').onclick = function () {
    Calc_f.nextMonth();
  };
  getId('btnPrev-month-from').onclick = function () {
    Calc_f.previousMonth();
  };
  getId('btnNext-year-from').onclick = function () {
    Calc_f.nextYear();
  };
  getId('btnPrev-year-from').onclick = function () {
    Calc_f.previousYear();
  };
  getId('btnPrev-year-from').onclick = function () {
    Calc_f.previousYear();
  };
  getId('btnPrev-year-from').onclick = function () {
    Calc_f.previousYear();
  };

  Calc_b.showcurr();

  getId('btnNext-month-before').onclick = function () {
    Calc_b.nextMonth();
  };
  getId('btnPrev-month-before').onclick = function () {
    Calc_b.previousMonth();
  };
  getId('btnNext-year-before').onclick = function () {
    Calc_b.nextYear();
  };
  getId('btnPrev-year-before').onclick = function () {
    Calc_b.previousYear();
  };
  getSelector('.cal-el-before-year').forEach((el) => {
    el.onclick = function () {
      year_before = 1
      Calc_b.listYear(Number(el.innerHTML));
      document.getElementById('year_cal-before').innerHTML = Number(el.innerHTML);
      document.getElementById('year_cal-before-list').classList.remove('cal-list-open');
      apply_visible++
    }
  });
  getSelector('.cal-el-before-month').forEach((el, index) => {
    el.onclick = function () {
      month_before = 1
      Calc_b.listMonth(index);
      document.getElementById('month_cal-before-list').classList.remove('cal-list-open');
      apply_visible++
    }
  });
  getSelector('.cal-el-from-year').forEach((el) => {
    el.onclick = function () {
      document.getElementById('year_cal-from-list').classList.remove('cal-list-open');
      year_from = 1;
      document.getElementById('year_cal-from').innerHTML = Number(el.innerHTML);
      Calc_f.listYear(Number(el.innerHTML));
      apply_visible++
    }
  });
  getSelector('.cal-el-from-month').forEach((el, index) => {
    el.onclick = function () {
      document.getElementById('month_cal-from-list').classList.remove('cal-list-open');
      month_from = 1;
      Calc_f.listMonth(index);
      apply_widthname = 1
      apply_visible++
    }
  });

  document.getElementById('input_from').addEventListener('keyup', function () {
    var inpt = document.getElementById('input_from').value;
    if (inpt.length == 10) {
      apply_widthname = 1
      var inptList = inpt.split('.');
      year_from = 1;
      month_from = 1;
      Calc_f.listMonth(Number(inptList[1] - 1));
      Calc_f.listYear(Number(inptList[2]));
      if (document.getElementById(`${Number(inptList[0])}.${Number(inptList[1])}.${Number(inptList[2])}_from`) != null) {
        document.getElementById(`${Number(inptList[0])}.${Number(inptList[1])}.${Number(inptList[2])}_from`).click();
      }
    }
  })
  document.getElementById('input_before').addEventListener('keyup', function () {
    var inpt = document.getElementById('input_before').value;
    if (inpt.length == 10) {
      var inptList = inpt.split('.');
      apply_widthname = 1
      Calc_b.listMonth(Number(inptList[1] - 1));
      Calc_b.listYear(Number(inptList[2]));
      if (document.getElementById(`${Number(inptList[0])}.${Number(inptList[1])}.${Number(inptList[2])}_before`) != null) {
        document.getElementById(`${Number(inptList[0])}.${Number(inptList[1])}.${Number(inptList[2])}_before`).click();
      }
    }
  })
  document.getElementById('inpt_month-mobile').addEventListener('keyup', function () {
    var inpt = document.getElementById('inpt_month-mobile').value;
    var inpt_list = inpt.split('');
    getSelector('.month_mobile').forEach((el, index) => {
      var months_list = Months[index].split('')
      var flag_month = 1;
      if (inpt.length > 2) {
        for (let i = 0; i < inpt_list.length; i++) {
          if (months_list[i] == inpt_list[i]) {
            flag_month = 1;
          } else {
            flag_month = 0;
            break
          }
        }
        if (flag_month == 1) {
          if (document.getElementById(`month${index}`) != null) {
            document.getElementById(`month${index}`).scrollIntoView({ block: "center", behavior: "smooth" });
            document.getElementById(`mont${index}`).checked = true;
            document.getElementById('btn_apply-mobile').classList.add('btn_apply_active');
            document.getElementById('inpt_month-mobile').value = Months[index]
          }
        }
      }
    });
  })
  document.getElementById('inpt-year_mobile').addEventListener('keyup', function () {
    var inpt = document.getElementById('inpt-year_mobile').value;
    var inpt_list = inpt.split('');
    getSelector('.year_mobile').forEach((el, index) => {
      var year_list = el.innerHTML.split('')
      var flag_year = 1;
      if (inpt.length > 1) {
        for (let i = 0; i < inpt_list.length; i++) {
          if (year_list[i] == inpt_list[i]) {
            flag_year = 1;
          } else {
            flag_year = 0;
            break
          }
        }
        if (flag_year == 1) {
          if (document.getElementById(`mobile-years_${Number(el.innerHTML)}`) != null) {
            document.getElementById(`mobile-years_${Number(el.innerHTML)}`).scrollIntoView({ block: "center", behavior: "smooth" });
            document.getElementById(`mobile-year_${Number(el.innerHTML)}`).checked = true;
            document.getElementById('btn_apply-mobile').classList.add('btn_apply_active');
          }
        }
      }
    });
  })
  getSelector('.year_mobile').forEach((el) => {
    el.onclick = function () {
      document.getElementById('inpt-year_mobile').value = el.innerHTML
      document.getElementById('btn_apply-mobile').classList.add('btn_apply_active')
    }
  });
  getSelector('.month_mobile').forEach((el) => {
    el.onclick = function () {
      document.getElementById('inpt_month-mobile').value = el.innerHTML
      document.getElementById('btn_apply-mobile').classList.add('btn_apply_active')
    }
  });
}
// Получить элемент по id
function getId(id) {
  return document.getElementById(id);
}

function getSelector(el) {
  return document.querySelectorAll(el);
}

document.getElementById('calendar_window').onclick = function () {
  document.getElementById('calendar_before').style = "background:#FFF;";
}
let apply_widthname = 0;
let apply_visible = 0;
document.getElementById('calendar_window1').onclick = function () {
  document.getElementById('calendar_from').style = "background:#FFF;";
  if (viewport_width >= 620) {
    if (apply_widthname == 1) {
      apply_width()
    }    
  }
}

function apply_width() {
  if(viewport_width > 820){
    document.getElementById('calc_apply').style = "display:flex;width:725px;";
  }else{
    document.getElementById('calc_apply').style = "display:flex;width:605px;";
  }
}

var open_before_flag = 0
function open_before() {
  before_checked_old_del = `${date_checked_before_array[0]}.${date_checked_before_array[1]}.${date_checked_before_array[2]}_before`
  from_checked_old_del = `${date_checked_from_array[0]}.${date_checked_from_array[1]}.${date_checked_from_array[2]}_from`
  if (open_before_flag == 0) {
    if (viewport_width >= 620) {
      document.getElementById('calendar_window').classList.add('calendar_window-open');
      document.getElementById('calendar_window1').classList.add('calendar_window-open');
      document.getElementById('rest_apply').classList.remove('rest_apply_active')
      document.getElementById('btn_apply').classList.remove('btn_apply_active')
      document.getElementById('calc_apply').style.display = 'flex'
    } else {
      document.getElementById('btn_apply-mobile').classList.remove('btn_apply_active')
      document.getElementById('calendar_window').classList.add('calendar_window-open');
      document.getElementById('calendar_window1').classList.remove('calendar_window-open');
      document.getElementById('apply_mobile').style.display = 'flex'
    }
    document.getElementById('calendar_before').style = "background:#FFF;";
    open_from_flag = 1
    open_from_before = 1
  } else {
    if (viewport_width >=620) {
      document.getElementById('calendar_window').classList.remove('calendar_window-open');
      document.getElementById('calendar_window1').classList.remove('calendar_window-open');
      document.getElementById('calendar_from').style = "";
      document.getElementById('calendar_before').style = "";
      document.getElementById('calc_apply').style.display = ''
    } else {
      document.getElementById('apply_mobile').style.display = ''
      document.getElementById('calendar_window').classList.remove('calendar_window-open');
    }
    open_from_flag = 0
    open_from_before = 0
  }
}

var open_from_flag = 0
function open_from() {
  from_checked_old_del = `${date_checked_from_array[0]}.${date_checked_from_array[1]}.${date_checked_from_array[2]}_from`
  before_checked_old_del = `${date_checked_before_array[0]}.${date_checked_before_array[1]}.${date_checked_before_array[2]}_before`
  if (open_from_flag == 0) {
    if (viewport_width >= 620) {
      document.getElementById('calendar_window').classList.add('calendar_window-open');
      document.getElementById('calendar_window1').classList.add('calendar_window-open');
      document.getElementById('rest_apply').classList.remove('rest_apply_active')
      document.getElementById('btn_apply').classList.remove('btn_apply_active')
      document.getElementById('calc_apply').style.display = 'flex'
    } else {
      document.getElementById('apply_mobile').style.display = 'flex'
      document.getElementById('btn_apply-mobile').classList.remove('btn_apply_active')
      document.getElementById('calendar_window1').classList.add('calendar_window-open');
      document.getElementById('calendar_window').classList.remove('calendar_window-open');
    }
    document.getElementById('calendar_from').style = "background:#FFF;";
    if (apply_widthname == 1) {
      apply_width()
    }
    open_from_flag = 1
    open_from_before = 1
  } else {
    if (viewport_width >= 620) {
      document.getElementById('calendar_window').classList.remove('calendar_window-open');
      document.getElementById('calendar_window1').classList.remove('calendar_window-open');
      document.getElementById('calendar_from').style = "";
      document.getElementById('calendar_before').style = "";
      document.getElementById('calc_apply').style.display = ''
    } else {
      document.getElementById('apply_mobile').style.display = ''
      document.getElementById('calendar_window1').classList.remove('calendar_window-open');
    }
    open_from_flag = 0
    open_from_before = 0
  }
}

const year_cal_from_list = document.querySelector('#year_cal-from-list')
const year_cal_list_mobile = document.querySelector('#list_year-mobile')
let inner = ''
let inner_mobile = ''
var year_today = new Date().getFullYear();

for (let i = year_today; i >= (year_today - 20); i--) {
  inner += `<button onclick="year_cal_from_list_close()" class="cal-el-from-year cal-el calc_color-theme">${i}</button>`
  inner_mobile += `<div id="mobile-years_${i}" class="list_mobile-wrapper">
  <input id="mobile-year_${i}" type="radio" name="year">
  <label for="mobile-year_${i}" class="input_radio-calen year_mobile">${i}</label>
  </div>`
}

year_cal_from_list.innerHTML = inner
year_cal_list_mobile.innerHTML = inner_mobile
var year_cal_from_list_open_flag = 0;
function year_cal_from_list_open() {
  if (viewport_width >= 620) {
    if (year_cal_from_list_open_flag == 0) {
      document.getElementById('year_cal-from-list').classList.add('cal-list-open');
      year_cal_from_list_open_flag = 1;
    } else {
      document.getElementById('year_cal-from-list').classList.remove('cal-list-open');
      year_cal_from_list_open_flag = 0;
    }
  } else {
    mobile_year = 1
    document.getElementById('year_mobile-calen').classList.add('cal-list-open');
    document.getElementById('inpt-year_mobile-label').style.display = 'inline-flex'
    document.getElementById('head_mobile-text').innerHTML = 'Выберите год';
    document.getElementById('head_mobile-text').style.color = '#000';
  }
}

let Months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
const month_cal_from_list = document.querySelector('#month_cal-from-list')
const month_cal_list_mobile = document.querySelector('#list_month-mobile')
inner = ''
inner_mobile = ''

for (let i = 0; i < 12; i++) {
  inner += `<button onclick="month_cal_from_list_close()" class="cal-el-from-month cal-el calc_color-theme">${Months[i]}</button>`
  inner_mobile += `<div id="month${i}" class="list_mobile-wrapper">
  <input id="mont${i}" type="radio" name="month">
  <label for="mont${i}" class="input_radio-calen month_mobile">${Months[i]}</label>
</div>`
}

month_cal_from_list.innerHTML = inner
month_cal_list_mobile.innerHTML = inner_mobile
var month_cal_from_list_open_flag = 0;
function month_cal_from_list_open() {
  if (viewport_width >= 620) {
    if (year_from != 0) {
      if (month_cal_from_list_open_flag == 0) {
        document.getElementById('month_cal-from-list').classList.add('cal-list-open');
        month_cal_from_list_open_flag = 1;
      } else {
        document.getElementById('month_cal-from-list').classList.remove('cal-list-open');
        month_cal_from_list_open_flag = 0;
      }
    }
  } else {
    if (year_from != 0) {
      document.getElementById('month_mobile-calen').classList.add('cal-list-open');
      document.getElementById('inpt_month-mobile-label').style.display = 'inline-flex'
      document.getElementById('head_mobile-text').innerHTML = 'Выберите месяц';
      document.getElementById('head_mobile-text').style.color = '#000';
      mobile_month = 1
    }
  }
}

const year_cal_before_list = document.querySelector('#year_cal-before-list')
inner = ''

for (let i = year_today; i >= (year_today - 20); i--) {
  inner += `<button onclick="year_cal_before_list_close()" class="cal-el-before-year cal-el calc_color-theme">${i}</button>`
}

year_cal_before_list.innerHTML = inner
var year_cal_before_list_open_flag = 0
function year_cal_before_list_open() {
  if (viewport_width >= 620) {
    if (year_cal_before_list_open_flag == 0) {
      document.getElementById('year_cal-before-list').classList.add('cal-list-open');
      year_cal_before_list_open_flag = 1;
    } else {
      document.getElementById('year_cal-before-list').classList.remove('cal-list-open');
      year_cal_before_list_open_flag = 0;
    }
  } else {
    document.getElementById('year_mobile-calen').classList.add('cal-list-open');
    document.getElementById('inpt-year_mobile-label').style.display = 'inline-flex'
    document.getElementById('head_mobile-text').innerHTML = 'Выберите год';
    document.getElementById('head_mobile-text').style.color = '#000';
    mobile_year = 2;
  }
}

const month_cal_before_list = document.querySelector('#month_cal-before-list')
inner = ''

for (let i = 0; i < 12; i++) {
  inner += `<button onclick="month_cal_before_list_close()" class="cal-el-before-month cal-el calc_color-theme">${Months[i]}</button>`
}

month_cal_before_list.innerHTML = inner
var month_cal_before_list_open_flag = 0;
function month_cal_before_list_open() {
  if (viewport_width >= 620) {
      if (month_cal_before_list_open_flag == 0) {
        document.getElementById('month_cal-before-list').classList.add('cal-list-open');
        month_cal_before_list_open_flag = 1;
      } else {
        document.getElementById('month_cal-before-list').classList.remove('cal-list-open');
        month_cal_before_list_open_flag = 0;
      }
    
  } else {
    document.getElementById('month_mobile-calen').classList.add('cal-list-open');
    document.getElementById('inpt_month-mobile-label').style.display = 'inline-flex'
    document.getElementById('head_mobile-text').innerHTML = 'Выберите месяц';
    document.getElementById('head_mobile-text').style.color = '#000';
    mobile_month = 2
  }
}

var names_flag_before = 0;
var names_flag_from = 0;


function apply() {
  document.getElementById('calc_apply').style.display = 'none'
  if (mobile_month == 0 && mobile_year == 0) {
    var names = document.getElementById('input_before').value;
    var nameList = names.split('.');
    var names1 = document.getElementById('input_from').value;
    var nameList1 = names1.split('.');
    if (new Date(date_checked_from_array[2], date_checked_from_array[1], date_checked_from_array[0]) > new Date(date_checked_before_array[2], date_checked_before_array[1], date_checked_before_array[0])) {
      document.getElementById('calen_error').style.display = 'flex';
      document.getElementById('calen_error-text').innerHTML = 'Дата начала периода превышает дату окончания';
    }
    if (names != '' && names_flag_before == 0) {
      names_flag_before = 1
      document.getElementById('calendar_before').classList.add('calendar_active');
      document.getElementById('calendar-inf_before').classList.add('calendar-inf_active');
      document.getElementById('calen_clear_before').style.display = "flex";
      document.getElementById('input_before').value = ""
      document.getElementById('input_before').value = `${nameList[0]} ${Months[Number(nameList[1]) - 1]} ${nameList[2]}`
      if (viewport_width < 400  || (viewport_width <= 820 && 620 < viewport_width)) {
        document.getElementById('calen_open-before').style.display = 'none'
        document.getElementById('cal-inf-text_before').innerHTML = 'ДО'
      }
    }
    if (names1 != '' && names_flag_from == 0) {
      names_flag_from = 1;
      document.getElementById('calendar_from').classList.add('calendar_active');
      document.getElementById('calendar-inf_from').classList.add('calendar-inf_active');
      document.getElementById('calen_clear_from').style.display = "flex";
      document.getElementById('input_from').value = ""
      document.getElementById('input_from').value = `${nameList1[0]} ${Months[Number(nameList1[1]) - 1]} ${nameList1[2]}`
      if (viewport_width <= 400 || (viewport_width <= 820 && 620 < viewport_width)) {
        document.getElementById('calen_open-from').style.display = 'none'
        document.getElementById('cal-inf-text_from').innerHTML = 'ОТ'
      }
    }
    if (document.getElementById('calendar_window').classList.contains('calendar_window-open')) {
      document.getElementById('calendar_window').classList.remove('calendar_window-open');
    }
    if (document.getElementById('calendar_window1').classList.contains('calendar_window-open')) {
      document.getElementById('calendar_window1').classList.remove('calendar_window-open');
    }
    document.getElementById('calendar_from').style = "";
    document.getElementById('calendar_before').style = "";
    document.getElementById('apply_mobile').style.display = ''
  } else if (mobile_month != 0) {
    document.getElementById('btn_apply-mobile').classList.remove('btn_apply_active')

    if (mobile_month == 1) {
      month_from = 1
      Calc_f.listMonth(Months.indexOf(document.getElementById('inpt_month-mobile').value))
    } else {
      month_before = 1
      Calc_b.listMonth(Months.indexOf(document.getElementById('inpt_month-mobile').value))
    }
    document.getElementById('month_mobile-calen').classList.remove('cal-list-open');
    document.getElementById('inpt_month-mobile-label').style.display = ''
    mobile_month = 0
    document.getElementById('head_mobile-text').innerHTML = 'Выберите период';
    document.getElementById('head_mobile-text').style.color = '';
  } else if (mobile_year != 0) {
    document.getElementById('btn_apply-mobile').classList.remove('btn_apply_active')
    if (mobile_year == 1) {
      year_from = 1
      document.getElementById('year_cal-from').innerHTML = Number(document.getElementById('inpt-year_mobile').value)
      Calc_f.listYear(Number(document.getElementById('inpt-year_mobile').value))
    } else {
      year_before = 1
      document.getElementById('year_cal-before').innerHTML = Number(document.getElementById('inpt-year_mobile').value)
      Calc_b.listYear(Number(document.getElementById('inpt-year_mobile').value))
    }
    document.getElementById('year_mobile-calen').classList.remove('cal-list-open');
    document.getElementById('inpt-year_mobile-label').style.display = ''
    mobile_year = 0
    document.getElementById('head_mobile-text').innerHTML = 'Выберите период';
    document.getElementById('head_mobile-text').style.color = '';
  }
}

function del() {
  if (mobile_month == 0 && mobile_year == 0) {
    if (document.getElementById(before_checked_old_del) != null) {
      document.getElementById(before_checked_old_del).click();
    } else {
      document.getElementById('input_before').value = '';
    }
    if (document.getElementById(from_checked_old_del) != null) {
      document.getElementById(from_checked_old_del).click();
    } else {
      document.getElementById('input_from').value = '';
    }
    apply();
  } else {
    if (document.getElementById('year_mobile-calen').classList.contains('cal-list-open')) {
      document.getElementById('year_mobile-calen').classList.remove('cal-list-open');
      document.getElementById('inpt-year_mobile-label').style.display = ''
    }
    if (document.getElementById('month_mobile-calen').classList.contains('cal-list-open')) {
      document.getElementById('month_mobile-calen').classList.remove('cal-list-open');
      document.getElementById('inpt_month-mobile-label').style.display = ''
    }
    document.getElementById('head_mobile-text').innerHTML = 'Выберите период';
    document.getElementById('head_mobile-text').style.color = '';
  }
}

function calen_clear(type) {
  document.getElementById('calendar_' + type).classList.remove('calendar_active');
  document.getElementById('calendar-inf_' + type).classList.remove('calendar-inf_active');
  document.getElementById('calen_clear_' + type).style.display = "";
  document.getElementById('input_' + type).value = ""
  if (type == 'from') {
    if (document.getElementById(date_checked_from + '_from') != null) {
      document.getElementById(date_checked_from + '_from').classList.remove('date_checked')
    }
    date_checked_list_clear(m_from, y_from, m_before, y_before)
    date_checked_from_array = []
    if (viewport_width <= 820) {
      document.getElementById('calen_open-from').style.display = 'block'
      document.getElementById('cal-inf-text_from').innerHTML = 'ДАТА ОТ'
    }
  }

  if (type == 'before') {
    if (document.getElementById(date_checked_before + '_before') != null) {
      document.getElementById(date_checked_before + '_before').classList.remove('date_checked')
    }
    date_checked_list_clear(m_from, y_from, m_before, y_before)
    date_checked_before_array = []
    if (viewport_width <= 820) {
      document.getElementById('calen_open-before').style.display = 'block'
      document.getElementById('cal-inf-text_before').innerHTML = 'ДАТА ДО'
    }
  }
}

document.addEventListener('click', function (event) {
  var e = document.getElementById('wrapper_main');
  var b = document.getElementById('year_mobile-calen');
  var c = document.getElementById('month_mobile-calen');
  var d = document.getElementById('inpt_month-mobile-label');
  var g = document.getElementById('inpt-year_mobile-label');
  if (!e.contains(event.target) && !b.contains(event.target) && !c.contains(event.target) && !d.contains(event.target) && !g.contains(event.target)) {
    apply()
  }
});






