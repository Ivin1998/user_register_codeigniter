<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Welcome extends CI_Controller
{



	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/userguide3/general/urls.html
	 */
	public function index()
	{

		$this->load->model('MyModel');
		$this->load->helper('url');
		$data['users'] = $this->MyModel->get_records();

		$this->load->view('contacts', $data);

	}
	public function add_record()
	{
		$first_name = $this->input->post('firstName');
		$last_name = $this->input->post('lastName');
		$mobile_number = $this->input->post('mobileNumber');
		$email = $this->input->post('email');
		$created_date = $this->input->post('createdDate');


		$data = array(
			'first_name' => $first_name,
			'last_name' => $last_name,
			'mobile_number' => $mobile_number,
			'email_id' => $email,
			'created_date' => $created_date

		);
		$this->MyModel->add_data($data);
	}

	public function edit_record()
	{
		$this->load->helper('url');

		$id = $this->input->post('id');
		$this->load->model('MyModel');
		$data = $this->MyModel->get_records_by_id($id);
		echo json_encode($data);
	}
	public function update_record()
	{

		$id = $this->input->post('id');
		$first_name = $this->input->post('firstName');
		$last_name = $this->input->post('lastName');
		$mobile_number = $this->input->post('mobileNumber');
		$email = $this->input->post('email');
		$mod_date = $this->input->post('modDate');
		$data = array(
			'first_name' => $first_name,
			'last_name' => $last_name,
			'mobile_number' => $mobile_number,
			'email_id' => $email,
			'mod_date' => $mod_date,

		);
		$this->MyModel->update_records($id, $data);
	}
	public function delete_record()
	{
		$id = $this->input->post('id');
		$this->MyModel->delete_records($id);
	}
}

?>