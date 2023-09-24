
function highlight(button) {
    var row = button.parentNode.parentNode; //one parentnode for tr and one parentNode for td
    row.classList.add("highlighted");
}
function checkDelete(id) {
    swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085D6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                type: "POST",
                url: 'delete.php',
                data: { id: id },
                success: function (data) {
                    swal.fire({
                        text: "User details deleted successfully!",
                        icon: "success",
                    });
                    location.reload();
                },
            });
        }
    })
}
function savecontact() {
    const numeric = /^[0-9]/;
    const noalphabets = /^[A-Za-z]+$/;
    const firstName = document.forms["contact"]["firstName"].value;
    if (firstName == "" || !noalphabets.test(firstName)) {
        $('.firstName').html("Enter a valid first name");
        return false;
    }

    let last_name = document.forms["contact"]["lastName"].value;
    if (last_name == "" || !noalphabets.test(last_name)) {
        $('.lastName').html("Enter a valid last name");
        return false;
    }

    let mobile_number = document.forms["contact"]["mobileNumber"].value;
    if (mobile_number == "" || !numeric.test(mobile_number)) {

        $('.mobileNumber').html("Enter a valid contact number");
        return false;
    }
    let office_number = document.forms["contact"]["officeNumber"].value;
    if (office_number) {
        if (!numeric.test(office_number)) {
            $('.officeNumber').html("Enter a valid office number");

            return false;
        }
    }
    let email_id = document.forms["contact"]["Email"].value;
    if (email_id) {
        if (noalphabets.test(email_id)) {
            $('.Email').html("Enter a valid Email address");
            return false;
        }
    }
    let twitter_id = document.forms["contact"]["Twitter"].value;
    if (twitter_id) {
        if (noalphabets.test(twitter_id)) {
            $('.Twitter').html("Enter a valid twitter handle");
            return false;
        }
    }
    let linkedin_id = document.forms["contact"]["Linkedin"].value;
    if (linkedin_id) {
        if (!noalphabets.test(linkedin_id)) {
            $('.Linkedin').html("Enter a valid linked profile");
            return false;
        }
    }
    let facebook_id = document.forms["contact"]["Facebook"].value;
    if (facebook_id) {
        if (!noalphabets.test(facebook_id)) {
            $('.Facebook').html("Enter a valid facebook profile");
            return false;
        }
    }
    $.ajax({
        type: "POST",
        url: 'add_data.php',
        data: $('#mycontact').serialize(),
        success: function (data) {
            swal.fire({
                text: "User details saved successfully!",
                icon: "success",
            });
            location.reload();
            $('.edit_data').hide();
        },

    });
}


$(document).on('keyup', '#firstName', function () {
    var firstName = $('#firstName').val();
    if (firstName != "") {
        $('.firstName').html("");
    }
})
$(document).on('keyup', '#lastName', function () {
    var lastName = $('#lastName').val();
    if (lastName != "") {
        $('.lastName').html("");
    }
});
$(document).on('keyup', '#lastName', function () {
    var lastName = $('#lastName').val();
    if (lastName != "") {
        $('.lastName').html("");
    }
});
$(document).on('keyup', '#mobileNumber', function () {
    var mobileNumber = $('#mobileNumber').val();
    if (mobileNumber != "") {
        $('.mobileNumber').html("");
    }
});
$(document).on('keyup', '#officeNumber', function () {
    var officeNumber = $('#officeNumber').val();
    if (officeNumber != "") {
        $('.officeNumber').html("");
    }
});
$(document).on('keyup', '#Email', function () {
    var Email = $('#Email').val();
    if (Email != "") {
        $('.Email').html("");
    }
});

$(document).on('keyup', '#Twitter', function () {
    var Twitter = $('#Twitter').val();
    if (Twitter != "") {
        $('.Twitter').html("");
    }
});
$(document).on('keyup', '#Linkedin', function () {
    var Linkedin = $('#Linkedin').val();
    if (Linkedin != "") {
        $('.Linkedin').html("");
    }
});
$(document).on('keyup', '#Facebook', function () {
    var Facebook = $('#Facebook').val();
    if (Facebook != "") {
        $('.Facebook').html("");
    }
});
$(document).on('keyup', '#password', function () {
    var password = $('#password').val();
    if (password != "") {
        $('.password').html("");
    }
});

$(document).on('click', '#checkbox', function () {
    $('.checkbox').html("");
})



/* Edit in popup modal*/
$(document).on('click', '.edit_data', function () {
    var user_id = $(this).attr('id');
    var row = $(this).closest('tr');
    row.addClass("highlighted");
    $.ajax({
        url: "fetch.php",
        method: "POST",
        data: { id: user_id },
        dataType: "json",
        success: function (data) {
            $('#firstName').val(data.first_name);
            $('#lastName').val(data.last_name);
            $('#department_name').val(data.department_id);
            $('#mobileNumber').val(data.mobile_number);
            $('#officeNumber').val(data.office_number);
            $('#Email').val(data.email_id);
            $('#Instagram').val(data.instagram_id);
            $('#Twitter').val(data.twitter_id);
            $('#Linkedin').val(data.linkedin_id);
            $('#Facebook').val(data.facebook_id);
            $('#country').val(data.country_id);
            $('#state').val(data.state);
            $('#city').val(data.city);
            $('#id').val(data.unique_id);
            $('#user_id').val(user_id);
            $('#add_con').click()
            $('#modal-title').html('Edit Details');
            $('#update_button').show();
            $('#Add').hide();
            $('#reload').click(function () {
                location.reload();
            });
        }
    });

});

$(document).ready(function () {
    $("#update_button").click(function () {
        $.ajax({
            url: "update.php",
            type: "POST",
            data: $('#mycontact').serialize(),
            success: function (data) {
                swal.fire({
                    text: "User details Updated successfully!",
                    icon: "success",
                });
                location.reload();
            },

        });
    });
    $("#add_con").click(function () {
        $('#update_button').hide();
        $('#Add').show();
    });
});

$(document).on('click', '.view_data', function () {
    var user_id = $(this).attr("id");
    if (user_id != '') {
        $.ajax({
            url: "select.php",
            method: "POST",
            data: { id: user_id },
            success: function (data) {
                $('#myForm').html(data);
                $('#add_con').click();
                $('#modal-title').html('User Details');
                $('#reload').click(function () {
                    location.reload();
                });
            }
        });
    }
});
//Datatables
$(document).ready(function () {
    $('#mytable').DataTable({
        dom: 'Blfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ]
    });
});



$(document).ready(function () {
    $(".import").click(function () {
        $('#Feed_input').hide();
        $('#importing').show();
    });
    $("#submit").click(function () {
        $.ajax({
            url: "import.php",
            type: "POST",
            data: $('#mycontact').serialize(),
            success: function (data) {
                swal.fire({
                    text: "User details Added successfully!",
                    icon: "success",
                });
                location.reload();
            },
        });
        location.reload();
    });
});


$(document).ready(function () {
    $("#add_con").click(function () {
        $('#importing').hide();
        $('#Feed_input').show();
    });

    $("#dept_add").click(function () {
        $.ajax({
            url: "add_departments.php",
            type: "POST",
            data: $('#mycontact').serialize(),
            success: function (data) {
                swal.fire({
                    text: "User details added successfully!",
                    icon: "success",
                });
                location.reload();
            },

        });
    })



    window.onscroll = function () { myFunction() };

    var header = document.getElementById("myHeader");
    var sticky = header.offsetTop;

    function myFunction() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }
});

$(document).ready(function () {
    $("#add_region").click(function () {
        $.ajax({
            url: "add_region.php",
            type: "POST",
            data: $('#mycontact').serialize(),
            success: function (data) {
                swal.fire({
                    text: "Region added successfully!",
                    icon: "success",
                });
                location.reload();
            },

        });

    });

    $("#add_state").click(function () {

        $('#modal-title').html('<br>Add State');
        $('#add_button').show();
        $('#update_button').hide();

    });
    $("#add_country").click(function () {

        $('#modal-title').html('<br>Add Country');

    });
    $("#add_city").click(function () {

        $('#modal-title').html('<br>Add City');
        $('#add_button').show();
        $('#update_button').hide();
    });


});

$(document).ready(function () {
    $('#country_dropdown').change(function () {
        var country_id = this.value;
        $.ajax({
            url: "../region/states.php",
            type: "POST",
            data: { country_id: country_id },
            success: function (data) {
                $('#state_dropdown').html(data);
            }
        });
    });
    $('#state_dropdown').change(function () {
        var state_id = this.value;
        $.ajax({
            url: "../region/cities.php",
            type: "POST",
            data: { state_id: state_id },
            success: function (data) {
                $('#city_dropdown').html(data);
            }
        });
    });
});

function check_region_Delete(id, type) {

    swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085D6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                type: "POST",
                url: '../region/delete_region.php',
                data: { id: id, type },
                success: function (data) {
                    swal.fire({
                        text: "Deleted successfully!",
                        icon: "success",
                    });
                    location.reload();
                },
            });
        }
    })
}

function edit_region(id, type) {      //for fetching county, state and city

    $.ajax({
        url: "fetch_region.php",
        method: "POST",
        data: { id: id, type },
        dataType: "json",
        success: function (data) {
            $('#name').val(data.name);
            $('#id').val(data.id);
        }

    });
}
function view_region(id, type) {
    $.ajax({
        url: "view_region.php",
        method: "POST",
        data: { id: id, type: type },
        success: function (data) {
            $('#name').val(data.name);
            $('#country_name').html(data);
            $('#reload').click(function () {
                location.reload();
            });
            if (type == 2) {
                $('#modal-title').html('<br><b>City List</b>');
            }
            else if (type == 1) {
                $('#modal-title').html('<br><b>State List</b>');
            }
        }
    });
}

$(document).ready(function () {
    $('#add_country').click(function () {

        $('#update_button').hide();
        $('#add_button').show();
        $('#name').val('');


    });

    $('#add_state').click(function () {

        $('#update_state').hide();
        $('#add_button').show();
        $('#name').val('');


    })

    $('.edit_icon').click(function () {

        $('#add_button').hide();
        $('#update_button').show();


    });
    $('#reload').click(function () {
        location.reload();
    });
});


function add_region(type) {
    $.ajax({
        type: "POST",
        url: 'add_region.php',
        data: $('#country_name').serialize() + "&type=" + type,
        success: function (data) {
            swal.fire({
                text: "New Region added successfully!",
                icon: "success",
            });
            location.reload();
        },
    });

}


function update_region(type) {
    $.ajax({
        url: "update_region.php",
        type: "POST",
        data: $("#country_name").serialize() + "&type=" + type,
        success: function (data) {
            swal.fire({
                text: "Updated successfully!",
                icon: "success",
            });
            location.reload();
        },
    });

}

function new_user() {
    const firstName = document.forms['create_account']['firstName'].value;
    const noalphabets = /^[A-Za-z]+$/;
    if (firstName == '' || !noalphabets.test('firstName')) {
        $('.firstName').html("Enter valid first name");
        return false;
    };

    const lastName = document.forms['create_account']['lastName'].value;
    if (lastName == '' || !noalphabets.test('lastName')) {
        $('.lastName').html("Enter valid last name");
        return false;
    };
    const password = document.forms['create_account']['password'].value;
    if (password == '') {
        $('.password').html("Enter valid password");
        return false;
    };

    let email_id = document.forms["create_account"]["Email"].value;
    if (email_id == '' || noalphabets.test(email_id)) {

        $('.Email').html("Enter a valid Email address");
        return false;

    }
    const checkbox = document.getElementById("checkbox");
    if (!checkbox.checked) {
        $('.checkbox').html("Please confirm the terms & conditions before creating an account").css('color', 'red');
        return false;

    }

    $.ajax({
        url: "new_user.php",
        type: "POST",
        data: $('#new_user').serialize(),
        success: function (data) {
            swal.fire({
                text: "User details saved successfully!",
                icon: "success",
            });
            location.reload();
        }
    });
};


$(document).ready(function () {
    $("#confirmPassword").on('keyup', function () {
        var password = $("#password").val();
        var confirmPassword = $("#confirmPassword").val();
        if (password != confirmPassword) {
            $("#CheckPasswordMatch").html("Password does not match!").css("color", "red");

        }
        else {
            $("#CheckPasswordMatch").html("Password matched!").css("color", "green");
            setTimeout(function () {
                $("#CheckPasswordMatch").html("");
            }, 5000)
        }

    });
});

function approve(id, type) {
    $.ajax({
        url: 'approval.php',
        type: "POST",
        data: { id: id, type: type },
        success: function (data) {
            swal.fire({
                text: "User activation status updated successfully!",
                icon: "success",
            });
            location.reload();
            
        }
    });

};














