:root {
	--blue: #007bff;
	--indigo: #6610f2;
	--purple: #6f42c1;
	--pink: #e83e8c;
	--red: #dc3545;
	--orange: #fd7e14;
	--yellow: #ffc107 !important;
  }
  
  /* Padding Utilities */
  .pb-lg-0, .py-lg-0 { padding-bottom: 0 !important; }
  .pl-lg-0, .px-lg-0 { padding-left: 0 !important; }
  .p-lg-1 { padding: .25rem !important; }
  .pt-lg-1, .py-lg-1 { padding-top: .25rem !important; }
  .pr-lg-1, .px-lg-1 { padding-right: .25rem !important; }
  /* ... */
  
  @media (min-width: 1200px) {
	.m-xl-0 { margin: 0 !important; }
	.mt-xl-0, .my-xl-0 { margin-top: 0 !important; }
	.mr-xl-0, .mx-xl-0 { margin-right: 0 !important; }
	.mb-xl-0, .my-xl-0 { margin-bottom: 0 !important; }
	.ml-xl-0, .mx-xl-0 { margin-left: 0 !important; }
	.m-xl-1 { margin: .25rem !important; }
	.mt-xl-1, .my-xl-1 { margin-top: .25rem !important; }
	.mr-xl-1, .mx-xl-1 { margin-right: .25rem !important; }
	/* ... */
  }
  
  /* Text Alignment */
  .text-monospace { font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace !important; }
  .text-justify { text-align: justify !important; }
  .text-wrap { white-space: normal !important; }
  .text-nowrap { white-space: nowrap !important; }
  .text-truncate { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  
  /* Visibility */
  .visible { visibility: visible !important; }
  .invisible { visibility: hidden !important; }
  
  /* Media Query Adjustments for Print */
  @media print {
	*, *::before, *::after { text-shadow: none !important; box-shadow: none !important; }
	a:not(.btn) { text-decoration: underline; }
	pre { white-space: pre-wrap !important; }
	/* ... */
  }
  
  /* Font Weights */
  .font-weight-light { font-weight: 300 !important; }
  .font-weight-normal { font-weight: 400 !important; }
  .font-weight-bold { font-weight: 700 !important; }
  .font-weight-bolder { font-weight: bolder !important; }
  
  /* Colors */
  .text-primary { color: #0BCEAF !important; }
  a.text-primary:hover, a.text-primary:focus { color: #078571 !important; }
  .text-secondary { color: #6c757d !important; }
  a.text-secondary:hover, a.text-secondary:focus { color: #494f54 !important; }
  /* ... */
  