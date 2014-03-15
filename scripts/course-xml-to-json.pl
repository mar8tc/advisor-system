#/usr/bin/env perl

use strict;
use warnings FATAL => qw(all);

use XML::XPath;
use XML::XPath::XMLParser;

my $xp      = XML::XPath->new(filename => $ARGV[0]);
my $nodeset = $xp->find('/descriptions/course');

print "{\n";
foreach my $node ($nodeset->get_nodelist) {
    my $subject = $node->find('subject/text()');
    my $number  = $node->find('course_number/text()');
    my $name    = $node->find('course_name/text()');
    $name =~ s/[^A-Za-z. ]//g;
    

    my $course_code = course_code($subject, $number);
    printf qq|    "$course_code" : "$subject $number $name",\n|;
}
print "}\n";

sub course_code {
    my ($subject, $number) = @_;
    $subject =~ s/ /_/g;
    return "$subject$number";
}
