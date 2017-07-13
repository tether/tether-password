# Overview

This module puts an ASCII encoded string into a buffer, which includes:
  - the result of a memory-hard, CPU-intensive hash function applied to the passed password.
  - automatically generates salt used for the previous computation
  - other parameters (`memlimit` and `optlimit`) listed below

The hashed buffer is allocated some memory and is large enough to hold 128 bytes.

## Parameters

It is important to determine how much memory is allocated to the execution of this module. According your usage, it is important to consider what will be the available memory and the highest number of processes executing the module function simultaneously.

### memlimit

`memlimit` is the amount of RAM memory reserved for password hashing (should be between 8192 and 4398046510080 bytes)

### opslimit

`opslimit` is the maximum amount of computations to perform (should be between 3 and 4294967295)

By default `opslimit` is equal to 4. Increase this number if you can afford more intensive computation without any usability issues. However, be aware that raising this number will make the module require mode CPU cycles to compute a key.
