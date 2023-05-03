<?php
class MyModel extends CI_Model
{
    public function get_records()
    {
        $this->load->database();
        $this->db->select();
        $this->db->from('contacts');
        $this->db->order_by('unique_id','Desc');
        $query = $this->db->get();
        $result = $query->result();
        return $result;
    }

    public function add_data($data){
        $this->load->database();
     
       $this->db->insert('contacts',$data);
    }
}
?>