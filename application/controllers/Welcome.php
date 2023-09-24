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
		$this->load->database();

		$this->load->helper('url');
		$this->load->view('login');
	}

	public function records_page()
	{
    if ($this->is_authenticated()) {

        $this->load->model('MyModel');
       
        $this->load->library('form_validation');
        $data['users'] = $this->MyModel->get_records();
		$this->load->helper('url');
        $this->load->view('contacts', $data);
    } else {
		// If authentication fails, generate a JavaScript alert
		echo '<script>';
		echo 'alert("Invalid credentials!");';
		echo 'window.history.back();'; 
		echo '</script>';
  }
}

public function is_authenticated()
{
    $username = $this->input->post('user_name');
    $password = md5($this->input->post('password'));
    $this->load->database();

    // Assuming your user table is named 'users' and has columns 'email' and 'password'
    $this->db->where('email', $username);
    $this->db->where('password', $password);
    $query = $this->db->get('users');

    if ($query->num_rows() === 1) {
        // If a user is authenticated, set session variables here
        $user = $query->row();
        $this->session->set_userdata('user_id', $user->user_id);
        $this->session->set_userdata('username', $user->email);
        return true; // User is authenticated
    }
	
  return false; 
    // Authentication failed
}
public function signup()
{
	$this->load->helper('url');
    $this->load->helper('form'); // Load the Form Helper
    $this->load->view('signup');
}
public function process_signup()
{	
	$this->load->database();

	$this->load->helper('url');
    $this->load->library('form_validation');
    $this->form_validation->set_rules('username', 'username', 'trim|required|min_length[5]|is_unique[users.username]');
    $this->form_validation->set_rules('password', 'Password', 'trim|required|min_length[6]');
    $this->form_validation->set_rules('confirm_password', 'Confirm Password', 'trim|required|matches[password]');

 
        // Validation passed, create the user account
        $this->load->model('MyModel');
        
        $username = $this->input->post('username');
		$password = md5($this->input->post('password'));
		
        $data = array(
            'email' => $username,
            'password' => $password
        );

        $this->MyModel->add_update_data($data);

        // Redirect to a success page or any other appropriate action
		echo '<script>';
		echo 'alert("User Updated!");';
		echo 'window.history.back();'; 
		echo '</script>';
}

	public function add_record()
	{
		$this->load->library('form_validation');
		$this->load->helper('url');

		$first_name = $this->input->post('firstName');
		$last_name = $this->input->post('lastName');
		$mobile_number = $this->input->post('mobileNumber');
		$email = $this->input->post('email');
		$created_date = $this->input->post('createdDate');

		$this->form_validation->set_rules('firstName', 'First Name', 'required|min_length[3]|alpha_numeric');
		$this->form_validation->set_rules('lastName', 'Last Name', 'required|min_length[3]|alpha_numeric');
		$this->form_validation->set_rules('email', 'Email', 'required|valid_email');
		$this->form_validation->set_rules('mobileNumber', 'mobileNumber', 'required|regex_match[/^[0-9]{10}$/]');


		if ($this->form_validation->run() == FALSE) {
			if (form_error('firstName')) {
				$data = array(
					'status' => 'incorrect',
					'id' => 0,
					'flag' => 1
				);
			} else if (form_error('lastName')) {
				$data = array(
					'status' => 'incorrect',
					'id' => 0,
					'flag' => 2
				);
			} else if (form_error('email')) {
				$data = array(
					'status' => 'incorrect',
					'id' => 0,
					'flag' => 3
				);
			} else if (form_error('mobileNumber')) {
				$data = array(
					'status' => 'incorrect',
					'id' => 0,
					'flag' => 4
				);
			}


			echo json_encode($data);

		} else {

			$data = array(
				'first_name' => $first_name,
				'last_name' => $last_name,
				'mobile_number' => $mobile_number,
				'email_id' => $email,
				'created_date' => $created_date
			);
			$this->MyModel->add_update_data($data);

			$data = array(
				'status' => 'Success',
				'id' => 1,
			);
			echo json_encode($data);
		}
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
		$this->MyModel->add_update_data($id, $data);
	}
	public function delete_record()
	{
		$id = $this->input->post('id');
		$this->MyModel->delete_records($id);
	}

	public function view_record()
	{
		$id = $this->input->post('id');
		$data['record'] = $this->MyModel->view_records($id);
		$this->load->view('record_view', $data);

	}
	public function submit_form()
	{
		$first_name = $this->input->post('firstName');
		$last_name = $this->input->post('lastName');

	}

}

?>
