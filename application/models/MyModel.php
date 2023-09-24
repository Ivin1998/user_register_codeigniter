<?php

class MyModel extends CI_Model
{
 public function get_records()
    {
        $this->load->database();
        $this->db->select();
        $this->db->from('contacts');
        $this->db->where('is_deleted', '0');
        $this->db->order_by('unique_id', 'Desc');
        $query = $this->db->get();
        $result = $query->result();
        return $result;
    }  

	public function add_update_data($data)
	{
		$this->load->database();
		$this->db->insert('users', $data);
	
		if ($this->db->affected_rows() > 0) {
			return true; // Data inserted successfully
		} else {
			// Handle the error, you can log it or return false
			$error_message = $this->db->error();
			log_message('error', 'Database error: ' . $error_message['message']);
			return false;
		}
	}
	

    public function get_records_by_id($id)
    {
        $this->load->database();
        $query = $this->db->get_where('contacts', array('unique_id' => $id));
        return $query->row();
    }

    // public function update_records($id, $data)
    // {

    //     $this->load->database();
    //     $this->db->where('unique_id', $id);
    //     $this->db->update('contacts', $data);
    //     $affected_rows = $this->db->affected_rows();
    //     return $affected_rows;
    // }

    public function delete_records($id)
    {
        $this->load->database();
        $this->db->set('is_deleted', '1');
        $this->db->where('unique_id', $id);
        $this->db->update('contacts');
    }

    public function view_records($id){
        $this->load->database();
        $this->db->select();
        $this->db->from('contacts');
        $this->db->where('unique_id', $id);
        $query = $this->db->get(); //executes the select query
        $result = $query->result(); //result() method is used to retrieve the rows of the result set
        return $result;
    }
}
?>
