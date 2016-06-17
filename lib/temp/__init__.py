#!/usr/bin/env python3
import sys

def exports(uppercase, lowercase, capitalize):
    return {
        "uppercase": uppercase.upper(),
        "lowercase": lowercase.lower(),
        "capitalize": capitalize.capitalize()
    }
