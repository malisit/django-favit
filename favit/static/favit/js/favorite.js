$(document).ready(function() {
  $('a.btn.favorite').click(function() {
      var $obj = $(this);
      var target_id = $obj.attr('id').split('_')[1];
      $obj.prop('disabled', true);
      $.ajax({
      url: '/favit/add-or-remove',
      type: 'POST',
      data: {target_model: $obj.attr('model'),
             target_object_id: target_id},
      success: function(response) {
        var status = response.split("|")[0];
        var count = response.split("|")[1];
          if (status == 'added') {
            $(".favorite-" + target_id).removeClass('fa-heart-o').addClass('fa-heart');
          }
          else {
            $(".favorite-" + target_id).removeClass('fa-heart').addClass('fa-heart-o');
          }
          $(".fav-count-" + target_id).html(count);
          $obj.prop('disabled', false);
      }
      });
  });
});