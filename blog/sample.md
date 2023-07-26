---
title: Sample Title
excerpt: just an example of how to make post
creation_date: 2023-07-26
tags: 
    - php
    - sample
    - happy
---

## hello world


this is a *test*



```php

use App\Models\User;

User::where("status", User::staff)
    ->where("age", ">", 20)
    ->get();

```