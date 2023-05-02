<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Welcome extends CI_Controller {

	

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
	public function index() {

		$this->load->model('MyModel');
		$this->load->helper('url');
		$data['users'] = $this->MyModel->get_records();
		
        $this->load->view('contacts', $data);

    }
	public function add_record(){
		$this->load->helper('url');
		$first_name = $this->input->post('firstName');
		$last_name = $this->input->post('lastName');
		$mobile_number = $this->input->post('mobileNumber');
		$email = $this->input->post('email');
		


		$data = array(
			'first_name' => $first_name,
			'last_name' => $last_name,
			'mobile_number' => $mobile_number,
			'email_id'=> $email
		);
		
	
	$this->MyModel->add_data($data);
		
	}
}

?>