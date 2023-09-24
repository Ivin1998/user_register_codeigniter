$(document).ready(function () {
    $('#save').click(function () {
        $.ajax({
            // url: 'index.php/welcome/add_record',
            type: "POST",
            dataType: "JSON",
            data: $('.myform').serialize(),
            success: function (data) {
                if (data.id == 0 && data.flag == 1) {
                    $('#warning_firstName').html("!");
                    $('.firstName').html("Please enter the valid first name");
                }
                else if (data.id == 0 && data.flag == 2) {
                    $('#warning_lastName').html("!");
                    $('.lastName').html("Please enter the valid last name");

                }
                else if (data.id == 0 && data.flag == 3) {
                    $('#warning_email').html("!");
                    $('.email').html("Please enter the valid email address");

                }
                else if (data.id == 0 && data.flag == 4) {
                    $('#warning_mobileNumber').html("!");
                    $('.mobileNumber').html("Please enter a valid 10 digit phone number");
                }
                else {
                    swal.fire({
                        text: "User details Updated successfully!",
                        icon: "success",
                    });
                    location.reload();
                }
            }
        })
    });
});
$(document).on('keyup', '#firstName, #lastName, #email,#mobileNumber', function () {
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    var email = $('#email').val();
    var mobileNumber = $('#mobileNumber').val();

    if (firstName.length > 2) {
        $('.firstName').html("");
        $('#warning_firstName').html("");
    }
    if (lastName.length > 2) {
        $('.lastName').html("");
        $('#warning_lastName').html("");

    }
    if (email.length > 2) {
        $('.email').html("");
        $('#warning_email').html("");

    }
    if (email.length > 2) {
        $('.email').html("");
        $('#warning_email').html("");

    }
    if (mobileNumber.length == 10) {
        $('.mobileNumber').html("");
        $('#warning_mobileNumber').html("");

    }
});
$(document).ready(function () {
    $('#modal_edit').click(function () {
        $('#save').show();
        $('#update').hide();
        $('.view_form').hide();
        $('.myform').show();
        $('.myform')[0].reset();
    })
});



$(document).ready(function () {
    $('.edit_data').click(function () {
        var user_id = $(this).attr('id');
        $.ajax({
            url: 'index.php/welcome/edit_record',
            type: "POST",
            data: { id: user_id },
            dataType: "json",
            success: function (data) {
                $('#firstName').val(data.first_name);
                $('#lastName').val(data.last_name);
                $('#mobileNumber').val(data.mobile_number);
                $('#email').val(data.email_id);
                $('#mymodal').modal('show'); //directly trigger the modal
                $('.modal-title').html('Edit Data');
                $('#save').hide();
                $('#update').show();
                $('#id').val(data.unique_id);
                $('.view_form').hide();
                $('.myform').show();
            }
        })
    });

    $("#update").click(function () {
        $.ajax({
            url: "index.php/welcome/update_record",
            type: "POST",
            data: $('.myform').serialize(),
            success: function (data) {
                swal.fire({
                    text: "User details Updated successfully!",
                    icon: "success",
                });
                location.reload();
            },
        });
    });

    $(".delete_data").click(function () {
        var user_id = $(this).attr('id');
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'btn btn-success',
            cancelButtonColor: 'btn btn-danger',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                $.ajax({
                    url: "index.php/welcome/delete_record",
                    type: "POST",
                    data: { id: user_id },
                    success: function (data) {
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                        location.reload();
                    }
                })
            }
            else {
                Swal.fire(
                    'Cancelled',
                    'Your file is safe :)',
                    'error'
                )
            }
        })
    })
    $('.view_data').click(function () {
        var user_id = $(this).attr('id');
        $.ajax({
            url: "index.php/welcome/view_record",
            type: "POST",
            data: { id: user_id },
            success: function (data) {
                $('#mymodal').modal('show');
                $('.view_form').html(data);
                $('.modal-title').html('User Details');
                $('#save').hide();
                $('.myform').hide();
                $('.view_form').show();
            }
        })

    })
});
$(document).ready(function () {
    $('#myTable').DataTable({
        dom: 'Blfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ]
    });

});

