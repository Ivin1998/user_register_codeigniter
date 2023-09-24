<!DOCTYPE html>
<html>
<head>

	<link rel="stylesheet" href="http://localhost:85/ci/assets/css/indexbootstrap.css">
	<link rel="stylesheet" href="http://localhost:85/ci/assets/css/styles.css">
	<link rel="stylesheet" href="http://localhost:85/ci/assets/css/bootstrapmin.css" />
	<link rel="stylesheet" href="http://localhost:85/ci/assets/css/formbootstrap.css">
	<link rel="stylesheet" href="http://localhost:85/ci/assets/css/styles.css">
	<link rel="stylesheet" href="http://localhost:85/ci/assets/css/style_sidebar.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" />
	<script type="text/javascript" src="http://localhost:85/ci/assets/css/sweetalert.js"></script>
	<script type="text/javascript" src="http://localhost:85/ci/assets/css/jquery.js"></script>
	<script type="text/javascript" src="http://localhost:85/ci/assets/css/bootstrapjs.js"></script>
	<script type="text/javascript" src="http://localhost:85/ci/assets/css/datatable1.js"></script> <!-- Pagination -->
	<script type="text/javascript" src="http://localhost:85/ci/assets/css/datatable2.js"></script>
	<!-- CSV in database table -->
	<script type="text/javascript" src="http://localhost:85/ci/assets/css/datatable3.js"></script>
	<!-- Excel in database table -->
	<script type="text/javascript" src="http://localhost:85/ci/assets/css/datatable4.js"></script>
	<!-- PDF button in database table -->
	<script type="text/javascript" src="http://localhost:85/ci/assets/css/datatable5.js"></script>
	<!-- Displaying the datatables buttons -->
	<script type="text/javascript" src="http://localhost:85/ci/assets/css/datatable6.js"></script>
	<!-- Print in database table -->
	<script type="text/javascript" src="http://localhost:85/ci/assets/css/datatable7.js"></script>
	<!-- PDF download in database table -->
	<script type="text/javascript" src="http://localhost:85/ci/assets/js/validations.js"></script>

	<title>Contacts</title>
</head>

<body>

	<div class="header" id="myHeader">
		<h2>User Application</h2>
	</div>
	<div class="row">
		<div class="col col-sm-6">
		</div>
		<div class="col col-sm-6">
			<button type="button" id="modal_edit" class="btn btn-primary btn-lg temp" style="margin: 1%;"
				data-toggle="modal" data-target="#mymodal"> Add a contact</button>
		</div>
	</div>
	<div class="modal fade" id="mymodal" tabindex="-1" role="dialog">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalLabel">Add Contact</h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close"
						style="margin-left: 80%;">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					<div class="view_form">
					</div>
					<div class="row">
						<div class="col col-sm-11">
							<?php echo form_open('welcome/add_record', array('class' => 'myform')); ?>
							<md style="color:red;display:flex;gap:5px;"><span style="color:black;">First
									Name:</span>*
							</md><input type="text" name="firstName" id="firstName" class="form-control" />
							<span class="firstName" style="color:red"> </span>
							<br>
							<md style="color:red;display:flex;gap:5px;"><span style="color:black;">Last Name:
								</span>*
							</md><input type="text" name="lastName" id="lastName" class="form-control" />
							<span class="lastName" style="color:red"> </span><br>
							<md style="color:red;display:flex;gap:5px;"><span style="color:black;">Email
									Address:</span>*
							</md><input type="text" name="email" id="email" class="form-control" />
							<span class="email" style="color:red"> </span><br>
							<md style="color:red;display:flex;gap:5px;"><span style="color:black;">Mobile Number:</span>
							</md><input type="text" name="mobileNumber" id="mobileNumber" class="form-control" />
							<span class="mobileNumber" style="color:red"> </span><br>
							<input type="hidden" value='<?php echo date('Y-m-d H:i:s') ?>' name="createdDate" />
							<input type="hidden" value='<?php echo date('Y-m-d H:i:s') ?>' name="modDate" />
							<input type="hidden" name="id" id="id" />

							<?php echo form_close(); ?>
						</div>
						<div class="col col-sm-1">
							<div id='warning_firstName' style="color:red"></div>
							<div id='warning_lastName' style="color:red"></div>
							<div id='warning_email' style="color:red"></div>
							<div id='warning_mobileNumber' style="color:red"></div>
						</div>
					</div>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
					<button type="submit" class="btn btn-primary" id="save">Save</button>
					<button type="button" class="btn btn-primary" id="update">Update</button>
				</div>
			</div>

		</div>
	</div>
	</div>
	<div class="container">
		<table id="myTable" border="1" class="table-bordered display" style="width:100%">
			<thead>
				<tr>
					<th>Sl.no.</th>
					<th>First Name</th>
					<th>Last Name</th>
					<th>Mobile Number</th>
					<th>Email Address</th>
					<th>Created Date</th>
					<th>Modified Date</th>
					<th style="width:150px;text-align:center">Actions</th>
				</tr>
			</thead>
			<tbody>
				<?php
				$no = 1;
				foreach ($users as $user) { ?>
					<td>
						<?php echo $no++; ?>
					</td>
					<td>
						<?php echo $user->first_name ?>
					</td>
					<td>
						<?php echo $user->last_name ?>
					</td>
					<td>
						<?php echo $user->mobile_number ?>
					</td>
					<td>
						<?php echo $user->email_id ?>
					</td>
					<td>
						<?php echo $user->created_date ?>
					</td>
					<td>
						<?php if (!empty($user->mod_date)) {
							echo $user->mod_date;
						} ?>
					</td>
					<td style="text-align:center">
						<a class=" btn btn-lg view_data view_data eye-icon" id="<?php echo $user->unique_id ?>"><i
								class=" fa fa-eye"></i></a>
						<a class="edit_data delete-icon" id="<?php echo $user->unique_id ?>"><i
								class="fa fa-edit edit_icon"></i></a>
						<a class=" delete_data remove_icon" id="<?php echo $user->unique_id ?>"><i
								class="fa fa-trash "></i></a>
					</td>
					</tr>
				<?php } ?>
		</table>
	</div>
</body>

</html>
