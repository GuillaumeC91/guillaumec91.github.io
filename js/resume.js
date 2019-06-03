(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

  //Bind Datatables
  $('#skillsTable').DataTable({
        "ajax": "js/skills.json",
        "dom": '<<"input-group mb-3" <"input-group-prepend" <"input-group-text" <"fas fa-search">>> fp>' +
          '<t>>',
        "language": {
          "search": "",
          "searchPlaceholder": "Search skills"
        },
        "pageLength": 25,
        "info": false,
        "columnDefs": [
          { "width": "40%", "targets": 0 },
          {
            "width": "60%",
            "targets": 1,
            "data": "skill_level",
            "render": function ( data, type, row, meta ) {
              return '<div class="progress">'+
                        '<div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width:' + data + '%" aria-valuenow="' + data + '" aria-valuemin="0" aria-valuemax="100"></div>' +
                      '</div>';
            }
          }
        ],
        "columns": [
            { "data": "skill" },
            { "data": "level" }
        ]
  });
})(jQuery); // End of use strict
