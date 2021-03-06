<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends CI_Controller {

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
		$this->load->helper('url');
		$this->load->helper('form');
  	}
	
	public function index()
	{
		//$this->load->template('home/blank');
		
		$data['title'] = 'Welcome';
		
		$this->load->view('templates/head', $data);
		$this->load->view('templates/header_large', $data);
		$this->load->view('templates/biography', $data);
		$this->load->view('templates/stats', $data);
		$this->load->view('templates/employment', $data);
		$this->load->view('templates/testimony', $data);
		$this->load->view('templates/projects', $data);
		$this->load->view('templates/contact', $data);
		$this->load->view('templates/footer', $data);
	}
}
