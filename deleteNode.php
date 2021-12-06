<?php

class SinglyLinkedListNode {
    public $data;
    public $next;

    public function __construct($node_data)
    {
        $this->data = $node_data;
        $this->next = null;
    }
}

class SinglyLinkedList {
    public $head;
    public $tail;

    public function __construct()
    {
        $this->head = null;
        $this->tail = null;
    }

    public function insertNode($node_data)
    {
        $node = new SinglyLinkedListNode($node_data);

        if (is_null($this->head)) {
            $this->head = $node;
        } else {
            $this->tail->next = $node;
        }

        $this->tail = $node;
    }
}

function printSinglyLinkedList($node, $sep, $fptr)
{
    while (!is_null($node)) {
        fwrite($fptr, $node->data);

        $node = $node->next;

        if (!is_null($node)) {
            fwrite($fptr, $sep);
        }
    }
}

/*
 * Complete the 'deleteNode' function below.
 *
 * The function is expected to return an INTEGER_SINGLY_LINKED_LIST.
 * The function accepts following parameters:
 *  1. INTEGER_SINGLY_LINKED_LIST llist
 *  2. INTEGER position
 */

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */

function deleteNode($llist, $position) {
    $current_obj = $llist;
    $temp = $llist;
    for ($i=0; $i <= $position; $i++) { 
        if($i == $position){
            //$temp = $temp->next;    
        print_r($temp->next);
        }else{
            $temp = $temp->next;
        }
        

    }
}

$llist = new SinglyLinkedList();
$llist_item = [ 'a', 'w','z','r','n'];
$llist_count = count($llist_item);

for ($i = 0; $i < $llist_count; $i++) {
    $llist->insertNode($llist_item[$i]);
}

$position = 1;

$llist1 = deleteNode($llist->head, $position);

