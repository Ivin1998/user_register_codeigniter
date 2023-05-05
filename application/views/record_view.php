<html>
<table border="1" class="table-bordered" style="width:100%" class="table-responsive table-bordered">
     
       <tr> <th style="width:10%;padding: 1.5%;">First Name</th>
       <td style="width:10%"><?php echo $record[0]->first_name; ?></td> </tr>
       <tr><th style="width:30%;padding: 1.5%;">Last Name</th>
       <td><?php echo $record[0]->last_name; ?></td></tr>
        <tr><th style="width:30%;padding: 1.5%;">Email Id</th>
        <td><?php echo $record[0]->email_id; ?></td>
        <tr><th style="width:30%;padding: 1.5%;">Mobile Number</th>
        <td><?php echo $record[0]->mobile_number; ?></td>
    </tr>
</table>

</html>