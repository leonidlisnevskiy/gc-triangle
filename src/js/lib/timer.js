  $(function() {
    var e = new Date('03/22/2018 09:0 AM'),
    t = 10,
    n = 100 * t,
    s = 60 * n,
    l = 60 * s,
    a = 24 * l;
    setInterval(function() {
      var r = new Date,
      m = e - r;
      if (m < 0) {
        for (M = document.getElementsByClassName('t-days'), i = 0; i < M.length; i++) M[i].innerHTML = '00';
          for (u = document.getElementsByClassName('t-hours'), i = 0; i < u.length; i++) u[i].innerHTML = '00';
            for (d = document.getElementsByClassName('t-mins'), i = 0; i < d.length; i++) d[i].innerHTML = '00';
              for (y = document.getElementsByClassName('t-sec'), i = 0; i < y.length; i++) y[i].innerHTML = '00';
                for (B = document.getElementsByClassName('t-milisec'), i = 0; i < B.length; i++) B[i].innerHTML = '00';
              } else {
                var o = Math.floor(m / a),
                g = Math.floor(m % a / l),
                f = Math.floor(m % l / s),
                h = Math.floor(m % s / n),
                c = Math.floor(m % n / t);
                h < 10 && (h = '0' + h),
                f < 10 && (f = '0' + f),
                g < 10 && (g = '0' + g);
                var M = document.getElementsByClassName('t-days');
                for (i = 0; i < M.length; i++) M[i].innerHTML = o;
                  var u = document.getElementsByClassName('t-hours');
                for (i = 0; i < u.length; i++) u[i].innerHTML = g;
                  var d = document.getElementsByClassName('t-mins');
                for (i = 0; i < d.length; i++) d[i].innerHTML = f;
                  var y = document.getElementsByClassName('t-sec');
                for (i = 0; i < y.length; i++) y[i].innerHTML = h;
                  var B = document.getElementsByClassName('t-milisec');
                for (i = 0; i < B.length; i++) B[i].innerHTML = c;
              }
          }, 10);
  });