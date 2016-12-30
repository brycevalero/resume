<?php defined('BASEPATH') OR exit('No direct script access allowed');

class MY_Loader extends CI_Loader {
    public function template($template_name, $vars = array(), $return = FALSE)
    {
        if($return):
			$content  = $this->view('templates/head', $vars, $return);
			$content .= $this->view('templates/header_small', $vars, $return);
			$content .= $this->view($template_name, $vars, $return);
			$content .= $this->view('templates/contact', $vars, $return);
			$content .= $this->view('templates/footer', $vars, $return);

			return $content;
		else:
			$this->view('templates/head', $vars);
			$this->view('templates/header_small', $vars);
			$this->view($template_name, $vars);
			$this->view('templates/contact', $vars);
			$this->view('templates/footer', $vars);
		endif;
    }
}