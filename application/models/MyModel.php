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

    public function add_data($data)
    {
        $this->load->database();
        $this->db->insert('contacts', $data);
    }

    public function get_records_by_id($id)
    {
        $this->load->database();
        $query = $this->db->get_where('contacts', array('unique_id' => $id));
        return $query->row();
    }

    public function update_records($id, $data)
    {

        $this->load->database();
        $this->db->where('unique_id', $id);
        $this->db->update('contacts', $data);
        $affected_rows = $this->db->affected_rows();
        return $affected_rows;
    }

    public function delete_records($id)
    {
        $this->load->database();
        $this->db->set('is_deleted', '1');
        $this->db->where('unique_id', $id);
        $this->db->update('contacts');
    }
}
?>