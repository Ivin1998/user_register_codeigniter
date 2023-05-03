$(document).ready(function () {
    $('#save').click(function () {
        $.ajax({
            url: 'index.php/welcome/add_record',
            type: "POST",
            data: $('#myform').serialize(),
            success: function (data) {
                swal.fire({
                    text: "User details Updated successfully!",
                    icon: "success",
                });
                location.reload();
            }
        })
    });

});

$(document).ready(function () {
    $('#modal_edit').click(function () {
        $('#save').show();
        $('#update').hide();
    })
    $('#reload').click(function () {
        location.reload();
    });
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
                $('#modal_edit').click();
                $('.modal-title').html('Edit Data');
                $('#save').hide();
                $('#update').show();
                $('#id').val(data.unique_id);
            }
        })
    });

    $("#update").click(function () {
        $.ajax({
            url: "index.php/welcome/update_record",
            type: "POST",
            data: $('#myform').serialize(),
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
        $.ajax({
            url: "index.php/welcome/delete_record",
            type: "POST",
            data: { id: user_id },
            success: function (data) {
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                    }
                    location.reload();

                })

            }
        })
    })

});


