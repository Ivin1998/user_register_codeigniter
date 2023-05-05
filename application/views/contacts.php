<?php
include 'header.php';
date_default_timezone_set('Asia/Calcutta');
?>

<!DOCTYPE html>
<html>

<head>
	<title>Contacts</title>
</head>

<body>
	<h1>User Application</h1>
	<div class="row">
		<div class="col col-sm-6">
		</div>
		<div class="col col-sm-6">
			<button type="button" id="modal_edit" class="btn btn-primary btn-lg" style="margin: 1%;" data-toggle="modal"
				data-target="#mymodal"> Add a contact</button>
		</div>
	</div>
	<div class="modal fade" id="mymodal" tabindex="-1" role="dialog">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalLabel">Add Contact</h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					<?php echo form_open('welcome/add_record', array('id' => 'myform')); ?>
					<md style="color:red;display:flex;gap:5px;"><span style="color:black;">First
							Name:</span>*
					</md><input type="text" name="firstName" id="firstName"
						value="<?php echo set_value('firstName'); ?>" class="form-control" />
						<span class="firstName" style="color:red"> </span>
						<br>
					<md style="color:red;display:flex;gap:5px;"><span style="color:black;">Last Name:
						</span>*
					</md><input type="text" name="lastName" id="lastName" class="form-control" /><br>
				
					<md style="color:red;display:flex;gap:5px;"><span style="color:black;">Email Address:</span>*
					</md><input type="text" name="email" id="email" class="form-control" />
					<md style="color:red;display:flex;gap:5px;"><span style="color:black;">Mobile Number:</span>
					</md><input type="text" name="mobileNumber" id="mobileNumber" class="form-control" />
					<input type="hidden" value='<?php echo date('Y-m-d H:i:s') ?>' name="createdDate" />
					<input type="hidden" value='<?php echo date('Y-m-d H:i:s') ?>' name="modDate" />
					<input type="hidden" name="id" id="id" />

					<?php echo form_close(); ?>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" data-dismiss="modal" id="reload">Close</button>
					<button type="button" class="btn btn-primary" id="save">Save</button>
					<button type="button" class="btn btn-primary" id="update">Update</button>
				</div>
			</div>
		</div>
	</div>
	<div class="container">
		<table id="mytable" border="1" class="table-bordered" style="width:100%">
			<thead>
				<tr>
					<th>Sl.no.</th>
					<th>First Name</th>
					<th>Last Name</th>
					<th>Mobile Number</th>
					<th>Email Address</th>
					<th>Created Date</th>
					<th>Modified Date</th>
					<th style="width:200px;text-align:center">Actions</th>
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
						<a class="btn-lg view_data" id="<?php echo $user->unique_id ?>"><i
								class="fa fa-eye eye_icon"></i></a>
						<a class="btn-lg edit_data" id="<?php echo $user->unique_id ?>"><i
								class="fa fa-edit edit_icon"></i></a>
						<a class="btn btn-lg delete_data" id="<?php echo $user->unique_id ?>"><i
								class="fa fa-trash remove_icon"></i></a>
					</td>
					</tr>
				<?php } ?>
		</table>
	</div>
</body>

</html>