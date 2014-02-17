#/usr/bin/env perl

use strict;
use warnings FATAL => qw(all);

use XML::XPath;
use XML::XPath::XMLParser;

my $xp      = XML::XPath->new(filename => $ARGV[0]);
my $nodeset = $xp->find('/descriptions/course');


# course(cmpsci4040).
# cantake(cmpsci4040) :- satisfied(cmpsci2750), satisfied(mat2450).
# 
# course(cmpsci1250).
# cantake(cmpsci1250) :- satisfied(math1030).
# cantake(cmpsci1250) :- satisfied(math1100).
# cantake(cmpsci1250) :- satisfied(math1800).

foreach my $node ($nodeset->get_nodelist) {
    my $subject = $node->find('subject/text()');
    my $number  = $node->find('course_number/text()');
    my $name    = $node->find('course_name/text()');

    my $course_code = lc course_code($subject, $number);
    print "course($course_code).\n";
    print "$_\n" for prerequisites($course_code,
        $node->find('prerequisite/or_choice/and_required'));
}

sub course_code {
    my ($subject, $number) = @_;
    $subject =~ s/ //g;
    return "$subject$number";
}

sub prerequisites {
    my ($course_code, $prereq_nodes) = @_;
    my $cantake = "cantake($course_code)";

    my @prereqs;
    foreach my $and_required ($prereq_nodes->get_nodelist) {
        my @satisfied = map {'satisfied('. lc $_ .')'}
            map {s/ //g; $_} split(',', $and_required->find('text()'));
        my $satisfied = join(', ', @satisfied);
        push @prereqs, "$cantake :- $satisfied.";
    }

    return @prereqs if @prereqs;
    return "$cantake.";
}
