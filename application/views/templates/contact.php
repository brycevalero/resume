<div class="fh5co-section-seperator fh5co-section-seperator-white" id="contact-animate" style="background-image: url(assets/images/hero-4.jpg);" data-stellar-background-ratio="0.5">
	<div class="fh5co-overlay"></div>
	<div class="container">
		<div class="fh5co-section-content-wrap">
			<div class="fh5co-section-content">
				<div class="row">
					
					<div class="col-md-3">
						<h2 class="fh5co-section-heading to-animate">Get In Touch<span class="fh5co-border"></span></h2>
						
						<ul class="fh5co-contact">
							<li class="fh5co-contact-address to-animate">
								<i class="icon-home"></i>
								United States
							</li>
							<li class="to-animate"><i class="icon-phone"></i> (570) 423 5335</li>
							<li class="to-animate"><i class="icon-email"></i>bryce.valero@gmail.com</li>
							<li class="to-animate"><i class="icon-globe"></i> <a href="http://www.brycevalero.com" target="_blank">brycevalero.com</a></li>
						</ul>
					</div>

					<div class="col-md-8 col-md-push-1">
						<div id="emailSent">
							<span class="fh5co-section-heading">Email sent</span>
						</div>
						<div id="emailError">
							<span class="fh5co-section-heading">Email error,  Refresh page and try again</span>
						</div>
						<div id="emailStatus" class="row">
							<form id="emailForm" parsley-validate>							
								<div class="col-md-6">
									<div class="form-group to-animate">
										<label for="name" class="sr-only">Name</label>
										<input type="text" id="name" name="name" class="form-control" placeholder="Name" parsley-trigger="change" required>
									</div>
									<div class="form-group to-animate">
										<label for="email" class="sr-only">Email</label>
										<input type="email" id="email" name="email" class="form-control" placeholder="Email" parsley-trigger="change" parsley-type="email" required>
									</div>
									<div class="form-group to-animate">
										<label for="phone" class="sr-only">Phone</label>
										<input type="text" id="phone" name="phone" class="form-control" placeholder="Phone" parsley-trigger="change" parsley-type="phone">
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group to-animate">
										<label for="message" class="sr-only">Message</label>
										<textarea name="" id="message" name="message" cols="30" rows="5" class="form-control" placeholder="Message" parsley-trigger="change" parsley-rangelength="[20,200]" required></textarea>
									</div>
									<div class="form-group to-animate">
										<input type="submit" id="submitEmail" class="btn btn-primary btn-block" value="Send Message">
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<!-- END .container -->