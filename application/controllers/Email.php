<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Email extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/home/index.php
	 *	- or -
	 * 		http://example.com/index.php/home/index.php
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/home/<method_name>
	 * @see https://codeigniter.com/user_guide/general/urls.html
	 */
	 
	public function __construct()
	{
  		parent::__construct();
  	}
	
	public function blast()
	{
		$this->load->library('email');
		
		$name = $this->input->post('name');
		$email = $this->input->post('email');
		$phone = $this->input->post('phone');
		$message = $this->input->post('message');
		$subject = "resume.brycevalero.com ($name : $phone)";

		$this->email->from($email, $name);
		$this->email->to('bryce.valero@gmail.com');
		
		$this->email->subject($subject);
		$this->email->message($message);
		
		$response = $this->email->send();
		
		echo $response;
	}
}
