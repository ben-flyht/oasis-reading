<?php
  $CURRENT_PAGE = rtrim($_SERVER["REQUEST_URI"], ".php");

  $URL = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on') ? "https://" : "http://";
  $URL .= $_SERVER['HTTP_HOST'];
  $URL .= $CURRENT_PAGE;

  $CANONICAL_URL = rtrim($URL, "/");
?>
